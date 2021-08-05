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
  private final PostService postService;

  public PostRs createPost(PostRq rq) {
    Post post = postService.createPost(convertToEntity(rq));
    return convertToDto(post);
  }

  public PostRs toggleLike(Long postId) {
    Post post = postService.toggleLike(postId);
    return convertToDto(post);
  }

//  public PostRs changeNumberOfComment(Long postId) {
//    Post post = postService.changeNumberOfComment(postId);
//    return convertToDto(post);
//  }

}

