package com.danit.fs12.service;

import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.notification.NotificationType;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;


@Service
@RequiredArgsConstructor
public class NotificationService extends GeneralService<Notification> {
  private final UserService userService;
  private final NotificationRepository notificationRepository;

  public void createNotification(NotificationType notificationType, Long postId, Long likeId) {
    User activeUser = userService.getActiveUser();
    Set<User> usersFollowingActiveUser = activeUser.getUsersFollowing();

    for (User user : usersFollowingActiveUser) {
      Notification notification = new Notification(
        notificationType,
        activeUser.getId(),
        postId,
        likeId
      );

      notification.setUser(user);
      Notification savedInDbNotification = save(notification);
      user.getNotifications().add(savedInDbNotification);
      userService.save(user);
    }
  }

  public List<Notification> getNotificationsForActiveUser() {
    Long activeUserId = userService.getActiveUser().getId();
    return notificationRepository.findNotificationsByUserId(activeUserId);
  }

  public List<Notification> getNotificationsForUserId(Long id) {
    return notificationRepository.findNotificationsByUserId(id);
  }
}
