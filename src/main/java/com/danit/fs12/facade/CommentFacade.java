package com.danit.fs12.facade;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.comment.CommentRq;
import com.danit.fs12.entity.comment.CommentRs;
import com.danit.fs12.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class CommentFacade extends GeneralFacade<Comment, CommentRq, CommentRs> {
  private final CommentService commentService;

  public CommentRs createComment(CommentRq rq) {
    Comment comment = commentService.createComment(rq);
    return convertToDto(comment);
  }

  public CommentRs toggleCommentLike(Long commentId) {
    Comment comment = commentService.toggleCommentLike(commentId);
    return convertToDto(comment);
  }

  public Page<CommentRs> getCommentsForPostPaginated(Long postId, Integer pageNumber, Integer pageSize) {
    Page<Comment> commentsPage = commentService.getCommentsForPostPaginated(postId, pageNumber, pageSize);
    return commentsPage.map(this::convertToDto);
  }

}

