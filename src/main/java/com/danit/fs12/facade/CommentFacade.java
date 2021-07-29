package com.danit.fs12.facade;

import com.danit.fs12.entity.comment.CommentRq;
import com.danit.fs12.entity.comment.CommentRs;
import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class CommentFacade extends GeneralFacade<Comment, CommentRq, CommentRs> {
  private CommentService commentService;

  public CommentRs createComment(Long activeUserId, Long postId, String text) {
    Comment comment = commentService.createComment(activeUserId, postId, text);
    return convertToDto(comment);
  }
}

