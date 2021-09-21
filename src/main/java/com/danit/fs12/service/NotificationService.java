package com.danit.fs12.service;

import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.NotificationRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;


@Service
@RequiredArgsConstructor
public class NotificationService extends GeneralService<Notification> {
  private final UserRepository userRepository;
  private final UserService userService;
  private final NotificationRepository notificationRepository;

  public void createNotification(Notification notification) {
    User activeUser = userService.getActiveUser();
    Set<User> usersFollowingActiveUser = activeUser.getUsersFollowing();
    for (User user: usersFollowingActiveUser) {
      Notification savedInDbNotification = save(notification);
      user.getNotifications().add(savedInDbNotification);
      userService.save(user);
    }
  }

  public List<Notification> getNotificationsForActiveUser() {
    User activeUser = userService.getActiveUser();
    // to add method to NotificationsRepository который будет получать все объекты Notifications
    // для определенного пользователя
    List<Notification> foundNotifications = notificationRepository.getNotificationsByUserId(activeUser.getId());
    return foundNotifications;
  }

}
