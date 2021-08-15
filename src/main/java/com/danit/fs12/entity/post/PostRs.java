package com.danit.fs12.entity.post;

import com.danit.fs12.entity.user.UserRs;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostRs {

  private Long id;
  private String text;
  private Long numberOfLikes;
  private Long numberOfComments;
  private Boolean isLikedByActiveUser;
  private Boolean isBookmarkedByActiveUser;
  private LocalDateTime createdDate;
  private LocalDateTime lastModifiedDate;
  private UserRs user;

}
