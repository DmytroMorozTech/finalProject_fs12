package com.danit.fs12.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
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

  @Column(
      name = "connected_user_id",
      updatable = false
  )
  private Long connectedUserId;
//   the user who was connected to the primary user (owner of connection)

  public Connection(User activeUser, Long userToBeConnectedId) {
    this.user = activeUser;
    this.connectedUserId = userToBeConnectedId;
  }
}
