package com.danit.fs12.entity.notification;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.user.User;
import com.vladmihalcea.hibernate.type.json.JsonBinaryType;
import com.vladmihalcea.hibernate.type.json.JsonStringType;
import lombok.*;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import org.hibernate.annotations.TypeDefs;

import javax.persistence.*;

@Entity
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "notifications")
@TypeDefs({
  @TypeDef(name = "json", typeClass = JsonStringType.class),
  @TypeDef(name = "jsonb", typeClass = JsonBinaryType.class)
})
public class Notification extends AbstractEntity {

  @Column(name = "type_notification")
  private NotificationType typeNotification;

  @Type(type = "jsonb")
  @Column(name = "data_notification",columnDefinition = "jsonb")
  private NotificationHashMap dataNotification;

  @Column(name = "related_id")
  private Long relatedId;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

}