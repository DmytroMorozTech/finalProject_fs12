package com.danit.fs12.facade;

import com.danit.fs12.entity.like.Like;
import com.danit.fs12.entity.like.LikeRq;
import com.danit.fs12.entity.like.LikeRs;
import com.danit.fs12.service.LikeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class LikeFacade extends GeneralFacade<Like, LikeRq, LikeRs> {
  private LikeService likeService;

  public LikeRs createLike(Long activeUserId, Long postId) {
    Like like = likeService.createLike(activeUserId, postId);
    return convertToDto(like);
  }
}
