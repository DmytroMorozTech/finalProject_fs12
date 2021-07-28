package com.danit.fs12.facade;

import com.danit.fs12.dto.comment.CommentDtoRq;
import com.danit.fs12.dto.comment.CommentDtoRs;
import com.danit.fs12.dto.post.PostDtoRq;
import com.danit.fs12.dto.post.PostDtoRs;
import com.danit.fs12.entity.Comment;
import com.danit.fs12.entity.Post;
import com.danit.fs12.service.CommentService;
import com.danit.fs12.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class PostFacade extends GeneralFacade<Post, PostDtoRq, PostDtoRs> {
  private PostService postService;

  public PostDtoRs createPost(Long activeUserId, String title, String mainText) {
    Post post = postService.createPost(activeUserId, title, mainText);
    return convertToDto(post);
  }
}

