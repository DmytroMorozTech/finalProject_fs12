package com.danit.fs12.facade;

import com.danit.fs12.dto.post.PostDtoRq;
import com.danit.fs12.dto.post.PostDtoRs;
import com.danit.fs12.entity.Post;
import com.danit.fs12.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class PostFacade extends GeneralFacade<Post, PostDtoRq, PostDtoRs> {
  private PostService postService;

  public PostDtoRs createPost(PostDtoRq rq) {
    Post post = postService.createPost(convertToEntity(rq), rq.getUserId());
    return convertToDto(post);
  }

}

