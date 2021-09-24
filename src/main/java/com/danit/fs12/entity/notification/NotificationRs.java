package com.danit.fs12.entity.notification;

import com.danit.fs12.controller.views.NotificationViews;
import com.danit.fs12.entity.user.UserRs;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

@Data
@JsonView(NotificationViews.Base.class)
public class NotificationRs {

  private Long id;

  private NotificationType typeNotification;

//  private String dataNotification;

  private Long relatedUserId;

  private UserRs user;

  private Long postId;

  private Long likeId;
}
