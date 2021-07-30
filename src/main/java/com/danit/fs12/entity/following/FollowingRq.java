package com.danit.fs12.entity.following;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class FollowingRq {

  @NotNull(message = "userId should be specified.")
  Long userId;

  @NotNull(message = "followedUserId should be specified.")
  Long followedUserId;

}
