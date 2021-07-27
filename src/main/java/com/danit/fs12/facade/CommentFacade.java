package com.danit.fs12.facade;

import com.danit.fs12.dto.comment.CommentDtoRq;
import com.danit.fs12.dto.comment.CommentDtoRs;
import com.danit.fs12.entity.Comment;
import com.danit.fs12.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class CommentFacade extends GeneralFacade<Comment, CommentDtoRq, CommentDtoRs> {
  private final CommentService commentService;

  public CommentDtoRs createComment(Long activeUserId, Long postId, String text) {
    Comment comment = commentService.createComment(activeUserId, postId, text);
    return convertToDto(comment);
  }
}

