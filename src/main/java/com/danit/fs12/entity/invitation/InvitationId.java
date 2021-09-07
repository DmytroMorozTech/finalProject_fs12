package com.danit.fs12.entity.invitation;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Embeddable
public class InvitationId implements Serializable {

  @Column(name = "user_who_id")
  private Long userWhoId;

  @Column(name = "user_whom_id")
  private Long userWhomId;
}
