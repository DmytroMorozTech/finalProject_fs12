package com.danit.fs12.entity.post;

import com.danit.fs12.controller.PostViews;
import com.danit.fs12.entity.user.UserRs;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PostRs {

  @JsonView(PostViews.Base.class)
  private Long id;

  @JsonView(PostViews.Base.class)
  private String text;

  @JsonView(PostViews.Base.class)
  private String imgUrl;

  @JsonView(PostViews.Base.class)
  private Long numberOfLikes;

  @JsonView(PostViews.Base.class)
  private Long numberOfComments;

  @JsonView(PostViews.Base.class)
  private Boolean isLikedByActiveUser;

  @JsonView(PostViews.Base.class)
  private Boolean isBookmarkedByActiveUser;

  @JsonView(PostViews.Base.class)
  private LocalDateTime createdDate;

  private LocalDateTime lastModifiedDate;

  @JsonView(PostViews.Base.class)
  private UserRs user;

}
