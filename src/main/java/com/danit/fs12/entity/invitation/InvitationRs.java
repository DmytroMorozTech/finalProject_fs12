package com.danit.fs12.entity.invitation;

import com.danit.fs12.controller.InvitationViews;
import com.danit.fs12.entity.user.UserRs;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@JsonView(InvitationViews.Base.class)
public class InvitationRs {

  private Long id;
  private LocalDateTime createdDate;
  private String text;
  private UserRs userWho;
  private UserRs userWhom;


}
