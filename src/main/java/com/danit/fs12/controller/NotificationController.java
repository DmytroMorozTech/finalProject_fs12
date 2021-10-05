package com.danit.fs12.controller;

import com.danit.fs12.controller.views.NotificationViews;
import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.notification.NotificationRs;
import com.danit.fs12.facade.NotificationFacade;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping(path = "/api/notifications")
@RequiredArgsConstructor
public class NotificationController {
  private final NotificationFacade notificationFacade;

  @MessageMapping("/notifications")
  @SendTo("/api/notifications")
  public Notification getNotification(Notification notification) {
    System.out.println(notification);
    return notification;
  }

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    notificationFacade.deleteById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @GetMapping(path = "{id}")
  @JsonView(NotificationViews.Base.class)
  ResponseEntity<List<NotificationRs>> getNotificationsForUserId(@PathVariable Long id) {
    List<NotificationRs> notifications = notificationFacade.getNotificationsForUserId(id);
    return ResponseEntity.ok().body(notifications);
  }

  @GetMapping
  @JsonView(NotificationViews.Base.class)
  ResponseEntity<List<NotificationRs>> getNotificationsForActiveUser() {
    List<NotificationRs> notificationsForActiveUser = notificationFacade.getNotificationsForActiveUser();
    return ResponseEntity.ok().body(notificationsForActiveUser);
  }

}
