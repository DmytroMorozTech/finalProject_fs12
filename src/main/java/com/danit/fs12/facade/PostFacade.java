package com.danit.fs12.facade;

import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.post.PostRq;
import com.danit.fs12.entity.post.PostRs;
import com.danit.fs12.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

  public Page<PostRs> getPostsForActiveUser(PageRequest pageRequest){
    Page<Post> postsPage = postService.getPostsForActiveUser(pageRequest);
    return postsPage.map(this::convertToDto);
  }
}

