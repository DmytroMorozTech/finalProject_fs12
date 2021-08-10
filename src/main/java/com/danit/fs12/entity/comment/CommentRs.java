package com.danit.fs12.entity.comment;

import com.danit.fs12.entity.user.UserRs;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CommentRs {

  private Long id;
  private String text;
  private UserRs user;
  private LocalDateTime createdDate;
  private LocalDateTime lastModifiedDate;

}
