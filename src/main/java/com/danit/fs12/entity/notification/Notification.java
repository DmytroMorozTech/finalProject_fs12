package com.danit.fs12.entity.notification;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.user.User;
import lombok.*;

import javax.persistence.*;

@Entity
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "notifications")
public class Notification extends AbstractEntity {

  @Column(name = "type_notification")
  private NotificationType typeNotification;

  @Column(name = "data_notification")
  private String dataNotification;

  @Column(name = "related_id")
  private Long relatedId;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

}