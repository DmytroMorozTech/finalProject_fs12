package com.danit.fs12.entity.like;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class LikeRq {

  @NotNull(message = "activeUserId should be specified.")
  Long activeUserId;

  @NotNull(message = "postId should be specified.")
  Long postId;
}
