package com.danit.fs12.entity.invitation;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;

@Entity
//@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "invitations")
public class Invitation{

  @EmbeddedId
  private InvitationId id;

  private String text;

  @ManyToOne
  @MapsId("userWhoId")
  @JoinColumn(name="user_who_id")
  private User userWho;

  @ManyToOne
  @MapsId("userWhomId")
  @JoinColumn(name="user_whom_id")
  private User userWhom;

  public Invitation(String text, User userWho, User userWhom) {
    this.text = text;
    this.userWho = userWho;
    this.userWhom = userWhom;
    this.id = new InvitationId(userWho.getId(), userWho.getId());
  }
}