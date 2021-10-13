package com.danit.fs12.facade;

import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.notification.NotificationRq;
import com.danit.fs12.entity.notification.NotificationRs;
import com.danit.fs12.service.NotificationService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class NotificationFacade extends GeneralFacade<Notification, NotificationRq, NotificationRs> {
  private final NotificationService notificationService;

  public Page<NotificationRs> getNotificationsForActiveUser(Integer pageNumber, Integer pageSize, String sortBy) {
    Page<Notification> notificationsPage = notificationService.getNotificationsForActiveUser(pageNumber, pageSize, sortBy);
    return notificationsPage.map(this::convertToDto);
  }

  public NotificationRs markNotificationAsViewed(Long id) {
    Notification notification = notificationService.markNotificationAsViewed(id);
    return convertToDto(notification);
  }

  public void markAllNotificationAsViewed() {
    notificationService.markAllNotificationAsViewed();
  }
}

