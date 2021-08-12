package com.danit.fs12.entity.following;

import lombok.Data;

@Data
public class FollowingRs {

  private Long userId;
  private Long followedUserId;
}
