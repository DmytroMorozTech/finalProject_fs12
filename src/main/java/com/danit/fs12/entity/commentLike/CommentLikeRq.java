package com.danit.fs12.entity.commentLike;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class CommentLikeRq {

  @NotNull(message = "activeUserId should be specified.")
  Long activeUserId;

  @NotNull(message = "commentId should be specified.")
  Long commentId;

}
