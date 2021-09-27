package com.danit.fs12.service;

import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.notification.NotificationType;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
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

  public void createNotification(NotificationType notificationType, HashMap<String, Long> data) {
    User activeUser = userService.getActiveUser();
    Set<User> usersFollowingActiveUser = activeUser.getUsersFollowing();

    for (User user : usersFollowingActiveUser) {
      Notification notification = new Notification(notificationType, data);

      notification.setUser(user);
      Notification savedInDbNotification = save(notification);
      user.getNotifications().add(savedInDbNotification);
      userService.save(user);
    }
  }

  public void createNotificationToggleLike(Long postId, Long postAuthorId) {
    User postAuthor = userService.findEntityById(postAuthorId);
    List<Notification> allNotificationsAboutPostLikes = postAuthor.getNotifications().stream()
      .filter(notification -> notification.getType() == NotificationType.POST_WAS_LIKED)
      .collect(Collectors.toList());

    Optional<Notification> notificationOpt = allNotificationsAboutPostLikes.stream()
      .filter(n -> n.getData().get("post_id").equals(postId)).findFirst();

    if (notificationOpt.isPresent()) {
      Notification notification = notificationOpt.get();
      Long currentNumberOfLikes = notification.getData().get("number_of_likes");
      notification.getData().put("number_of_likes", currentNumberOfLikes + 1);
      save(notification);
      return;
    }

    HashMap<String, Long> data = new HashMap<>();
    data.put("post_id", postId);
    data.put("number_of_likes", 1L);
    Notification notification = new Notification(NotificationType.POST_WAS_LIKED, data);
    notification.setUser(postAuthor);
    Notification savedInDbNotification = save(notification);
    postAuthor.getNotifications().add(savedInDbNotification);
    userService.save(postAuthor);
  }

  public void createNotificationComment(Long postId, Long postAuthorId) {
    User postAuthor = userService.findEntityById(postAuthorId);
    List<Notification> allNotificationsAboutPostComments = postAuthor.getNotifications().stream()
      .filter(notification -> notification.getType() == NotificationType.NEW_COMMENT_POST)
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
    Notification notification = new Notification(NotificationType.NEW_COMMENT_POST, data);
    notification.setUser(postAuthor);
    Notification savedInDbNotification = save(notification);
    postAuthor.getNotifications().add(savedInDbNotification);
    userService.save(postAuthor);
  }

  public List<Notification> getNotificationsForActiveUser() {
    Long activeUserId = userService.getActiveUser().getId();
    return notificationRepository.findNotificationsByUserId(activeUserId);
  }

  public List<Notification> getNotificationsForUserId(Long id) {
    return notificationRepository.findNotificationsByUserId(id);
  }
}
