package com.danit.fs12.entity.invitation;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class InvitationRq {

  @NotNull(message = "invitedUserId should be specified.")
  private Long userWhomId;
  // id of user who was invited;
  // the id of inviting User we will get from SpringSecurityContext

  private String text;

}
