package com.danit.fs12.service;

import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.NotificationRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class NotificationService extends GeneralService<Notification> {
  private final UserRepository userRepository;
  private final UserService userService;
  private final NotificationRepository notificationRepository;

  public Notification createNotification(Notification notification) {
    User activeUser = userService.getActiveUser();
    notification.setUser(activeUser);

    Notification savedInDbNotification = save(notification);

    activeUser.getNotifications().add(savedInDbNotification);
    userRepository.save(activeUser);

    return savedInDbNotification;
  }

  public List<Notification> getNotificationsForActiveUser() {
    User activeUser = userService.getActiveUser();
    // to add method to NotificationsRepository который будет получать все объекты Notifications
    // для определенного пользователя
    List<Notification> foundNotifications = notificationRepository.getNotificationsByUserId(activeUser.getId());
    return foundNotifications;
  }

}
