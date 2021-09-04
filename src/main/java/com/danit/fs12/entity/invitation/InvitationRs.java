package com.danit.fs12.entity.invitation;

import com.danit.fs12.entity.user.User;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class InvitationRs {

  private Long id;
  private LocalDateTime createdDate;
  private String text;
  private User userWhoId;
  private User userWhomId;


}
