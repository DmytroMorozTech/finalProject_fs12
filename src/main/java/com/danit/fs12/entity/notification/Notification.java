package com.danit.fs12.entity.notification;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.user.User;
import com.vladmihalcea.hibernate.type.json.JsonStringType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashMap;

@Entity
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "notifications")
@TypeDef(name = "json", typeClass = JsonStringType.class)
public class Notification extends AbstractEntity {

  public Notification(
    NotificationType typeNotification,
    Long relatedUserId,
//    NotificationHashMap dataNotification,
    Long postId,
    Long likeId
  ) {
    super();
    this.typeNotification = typeNotification;
    this.relatedUserId = relatedUserId;
//    this.dataNotification = dataNotification;
    this.postId = postId;
    this.likeId = likeId;
  }

  @Column(name = "type_notification")
  private NotificationType typeNotification; // e.g. NEW_POST_WAS_CREATED  ordinal = 1

  @Type(type = "json")
  @Column(name = "data_notification", columnDefinition = "json")
  private NotificationHashMap dataNotification;

  @Column(name = "post_id")
  private Long postId;

  @Column(name = "like_id")
  private Long likeId;

  @Column(name = "related_user_id")
  private Long relatedUserId; // id of User who triggered this Notification

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user; // activeUser

}