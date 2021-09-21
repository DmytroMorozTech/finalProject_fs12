package com.danit.fs12.facade;

import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.notification.NotificationRq;
import com.danit.fs12.entity.notification.NotificationRs;
import com.danit.fs12.service.NotificationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class NotificationFacade extends GeneralFacade<Notification, NotificationRq, NotificationRs> {
  private final NotificationService notificationService;

//  public NotificationRs createNotification(NotificationRq rq) {
//    Notification notification = convertToEntity(rq);
//    Notification savedNotification = notificationService.createNotification(notification);
//    return convertToDto(savedNotification);
//  }

  public List<NotificationRs> getNotificationsForActiveUser() {
    List<NotificationRs> notificationRsList = notificationService.getNotificationsForActiveUser()
      .stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());

    return notificationRsList;
  }
}

