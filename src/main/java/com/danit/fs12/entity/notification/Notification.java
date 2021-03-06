package com.danit.fs12.entity.notification;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.user.User;
import com.vladmihalcea.hibernate.type.json.JsonType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.HashMap;

@Entity
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "notifications")
@TypeDef(name = "json", typeClass = JsonType.class)
public class Notification extends AbstractEntity {

  public Notification(NotificationType typeNotification, HashMap<String, Long> data) {
    super();
    this.type = typeNotification;
    this.data = data;
    this.isViewed = false;
  }

  public Notification(
    NotificationType typeNotification,
    HashMap<String, Long> data,
    HashMap<String,String> userWhoTriggered
  ) {
    super();
    this.type = typeNotification;
    this.data = data;
    this.userWhoTriggered = userWhoTriggered;
    this.isViewed = false;
  }

  @Column(name = "is_viewed")
  private Boolean isViewed;

  @Column(name = "type")
  private NotificationType type;

  @Type(type = "json")
  @Column(name = "data", columnDefinition = "json")
  private HashMap<String, Long> data;

  @Type(type = "json")
  @Column(name = "user_who_triggered", columnDefinition = "json")
  private HashMap<String, String> userWhoTriggered;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

}