package com.danit.fs12.service;

import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.notification.NotificationType;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class NotificationService extends GeneralService<Notification> {
  private final UserService userService;
  private final NotificationRepository notificationRepository;

  public void createNotificationNewPost(HashMap<String, Long> data) {
    User activeUser = userService.getActiveUser();
    Set<User> usersFollowingActiveUser = activeUser.getUsersFollowing();

    for (User user : usersFollowingActiveUser) {
      Notification notification = new Notification(NotificationType.NEW_POST_WAS_CREATED, data);

      notification.setUser(user);
      Notification savedInDbNotification = save(notification);
      user.getNotifications().add(savedInDbNotification);
      userService.save(user);
    }
  }

  private Optional<Notification> getPostWasLikedNotificationOptional(Long postId, Long postAuthorId) {
    User postAuthor = userService.findEntityById(postAuthorId);
    List<Notification> allNotificationsAboutPostLikes = postAuthor.getNotifications().stream()
      .filter(notification -> notification.getType() == NotificationType.POST_WAS_LIKED)
      .collect(Collectors.toList());

    return allNotificationsAboutPostLikes
      .stream()
      .filter(n -> n.getData().get("post_id").equals(postId))
      .findFirst();
  }

  public void createOrUpdateNotificationAddLike(Long postId, Long postAuthorId) {
    Optional<Notification> notificationOpt = getPostWasLikedNotificationOptional(postId, postAuthorId);
    User postAuthor = userService.findEntityById(postAuthorId);
    if (notificationOpt.isEmpty()) {
      HashMap<String, Long> data = new HashMap<>();
      data.put("post_id", postId);
      data.put("number_of_likes", 1L);
      Notification notification = new Notification(NotificationType.POST_WAS_LIKED, data);
      notification.setUser(postAuthor);
      Notification savedInDbNotification = save(notification);
      postAuthor.getNotifications().add(savedInDbNotification);
      userService.save(postAuthor);
      return;
    }

    // if Notification already exists, then we have to update info in it and increment likes counter for post
    Notification notification = notificationOpt.get();
    Long currentNumberOfLikes = notification.getData().get("number_of_likes");
    notification.getData().put("number_of_likes", currentNumberOfLikes + 1);
    save(notification);
  }

  public void updateNotificationDecrementLike(Long postId, Long postAuthorId) {
    Optional<Notification> notificationOpt = getPostWasLikedNotificationOptional(postId, postAuthorId);
    if (notificationOpt.isPresent()) {
      Notification notification = notificationOpt.get();
      Long currentNumberOfLikes = notification.getData().get("number_of_likes");
      if (currentNumberOfLikes > 0) {
        notification.getData().put("number_of_likes", currentNumberOfLikes - 1);
        // decrement likes counter in the existing Notification
        save(notification);
      }
    }
  }

  public void createNotificationComment(Long postId, Long postAuthorId) {
    User postAuthor = userService.findEntityById(postAuthorId);
    List<Notification> allNotificationsAboutPostComments = postAuthor.getNotifications().stream()
      .filter(notification -> notification.getType() == NotificationType.NEW_COMMENTS_POST)
      .collect(Collectors.toList());

    Optional<Notification> notificationOpt = allNotificationsAboutPostComments.stream()
      .filter(n -> n.getData().get("post_id").equals(postId)).findFirst();

    if (notificationOpt.isPresent()) {
      Notification notification = notificationOpt.get();
      Long currentNumberOfComments = notification.getData().get("number_of_comments");
      notification.getData().put("number_of_comments", currentNumberOfComments + 1);
      save(notification);
      return;
    }

    HashMap<String, Long> data = new HashMap<>();
    data.put("post_id", postId);
    data.put("number_of_comments", 1L);
    Notification notification = new Notification(NotificationType.NEW_COMMENTS_POST, data);
    notification.setUser(postAuthor);
    Notification savedInDbNotification = save(notification);
    postAuthor.getNotifications().add(savedInDbNotification);
    userService.save(postAuthor);
  }

  public Page<Notification> getNotificationsForActiveUser(Integer pageNumber, Integer pageSize, String sortBy) {
    Long activeUserId = userService.getActiveUser().getId();
    PageRequest pageRequest = PageRequest.of(pageNumber, pageSize, Sort.Direction.DESC, sortBy);
    return notificationRepository.findNotificationsByUserId(activeUserId, pageRequest);
  }

  public List<Notification> getNotificationsForUserId(Long id) {
    return notificationRepository.findNotificationsByUserId(id);
  }


}
