package com.danit.fs12.entity.invitation;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "invitations")
public class Invitation extends AbstractEntity {

  private String text;

  @ManyToOne
  @JoinColumn(name = "user_who_id")
  private User userWho;

  @ManyToOne
  @JoinColumn(name = "user_whom_id")
  private User userWhom;

}