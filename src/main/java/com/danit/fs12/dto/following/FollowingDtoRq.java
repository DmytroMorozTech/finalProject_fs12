package com.danit.fs12.dto.following;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class FollowingDtoRq {

  @NotNull(message = "userId should be specified.")
  Long userId;

  @NotNull(message = "followedUserId should be specified.")
  Long followedUserId;

}
