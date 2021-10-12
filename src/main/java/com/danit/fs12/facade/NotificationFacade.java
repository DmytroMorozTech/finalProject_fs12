package com.danit.fs12.facade;

import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.notification.NotificationRq;
import com.danit.fs12.entity.notification.NotificationRs;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.post.PostRs;
import com.danit.fs12.service.NotificationService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class NotificationFacade extends GeneralFacade<Notification, NotificationRq, NotificationRs> {
  private final NotificationService notificationService;

  public Page<NotificationRs> getNotificationsForActiveUser(Integer pageNumber, Integer pageSize, String sortBy) {
    Page<Notification> notificationsPage = notificationService.getNotificationsForActiveUser(pageNumber, pageSize, sortBy);
    return notificationsPage.map(this::convertToDto);
  }

  public List<NotificationRs> getNotificationsForUserId(Long id) {
    List<Notification> notifications = notificationService.getNotificationsForUserId(id);
    return notifications.stream().map(this::convertToDto).collect(Collectors.toList());
  }
}

