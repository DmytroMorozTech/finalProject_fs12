package com.danit.fs12.entity.comment;

import com.danit.fs12.controller.CommentViews;
import com.danit.fs12.entity.user.UserRs;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CommentRs {

  @JsonView(CommentViews.Base.class)
  private Long id;

  @JsonView(CommentViews.Base.class)
  private String text;

  @JsonView(CommentViews.Base.class)
  private UserRs user;

  @JsonView(CommentViews.Base.class)
  private LocalDateTime createdDate;

  @JsonView(CommentViews.Base.class)
  private LocalDateTime lastModifiedDate;

  @JsonView(CommentViews.Base.class)
  private Boolean isLikedByActiveUser;

  @JsonView(CommentViews.Base.class)
  private Long numberOfLikes;
}
