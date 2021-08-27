package com.danit.fs12.facade;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.comment.CommentRq;
import com.danit.fs12.entity.comment.CommentRs;
import com.danit.fs12.service.CommentService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

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

  public List<CommentRs> getCommentsForPost(Long postId) {
    List<Comment> commentsList = commentService.getCommentsForPost(postId);
    List<CommentRs> listCommentRs = commentsList.stream()
      .map(this::convertToDto).collect(Collectors.toList());
    return listCommentRs;
  }

}

