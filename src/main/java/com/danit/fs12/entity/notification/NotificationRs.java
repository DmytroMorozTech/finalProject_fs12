package com.danit.fs12.entity.notification;

import com.danit.fs12.controller.views.NotificationViews;
import com.danit.fs12.controller.views.PostViews;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.HashMap;

@Data
@JsonView(NotificationViews.Base.class)
public class NotificationRs {

  private Long id;

  private LocalDateTime createdDate;

  private NotificationType type;

  private HashMap<String, Long> data;

  private Boolean isRead;
}
