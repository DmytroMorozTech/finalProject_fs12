package com.danit.fs12.facade;

import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.post.PostRq;
import com.danit.fs12.entity.post.PostRs;
import com.danit.fs12.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class PostFacade extends GeneralFacade<Post, PostRq, PostRs> {
  private PostService postService;

  public PostRs createPost(PostRq rq) {
    Post post = postService.createPost(convertToEntity(rq), rq.getUserId());
    return convertToDto(post);
  }

}

