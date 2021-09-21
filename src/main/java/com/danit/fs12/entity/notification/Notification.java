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

  public Notification(NotificationType typeNotification,
                      HashMap<String, String> dataNotification,
                      Long relatedUserId) {
    super();
    this.typeNotification = typeNotification;
    this.dataNotification = dataNotification;
    this.relatedUserId = relatedUserId;
  }

  @Column(name = "type_notification")
  private NotificationType typeNotification; // e.g. NEW_POST_WAS_CREATED  ordinal = 1

  @Type(type = "json")
  @Column(name = "data_notification", columnDefinition = "json")
  private HashMap<String,String> dataNotification;

  @Column(name = "related_user_id")
  private Long relatedUserId; // id of User who triggered this Notification
  // нам надо в Notification отрисовать аватар именно этого пользователя

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user; // activeUser

}

// {
//    numberOfLikes: n,
//    text: "some text",
//
// }