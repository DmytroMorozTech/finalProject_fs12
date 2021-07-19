package com.danit.fs12.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity(name = "Connection")
@Table(name = "connections")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@Data
public class Connection extends AbstractEntity {

  @ManyToOne
  @JoinColumn
      (
          name = "user_id",
          nullable = false,
          referencedColumnName = "id",
          foreignKey = @ForeignKey(
              name = "user_connection_fk"
          )
      )
  private User user;

  @ManyToOne
  @JoinColumn
      (
          name = "user_being_followed_id",
          nullable = false,
          referencedColumnName = "id",
          foreignKey = @ForeignKey(
              name = "user_being_followed_fk"
          )
      )
  private User userBeingFollowed;

  public Connection(User activeUser, User userBeingFollowed) {
    this.user = activeUser;
    this.userBeingFollowed = userBeingFollowed;
  }
}
