package com.danit.fs12.entity.notification;

import com.danit.fs12.controller.CommentViews;
import com.danit.fs12.entity.user.UserRs;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class NotificationRs {

  private Long id;

  private NotificationType typeNotification;

  private String dataNotification;

  private Long relatedId;

  private UserRs user;
}
