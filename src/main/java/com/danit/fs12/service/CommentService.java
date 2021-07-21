package com.danit.fs12.service;

import com.danit.fs12.entity.Comment;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CommentService {

  Optional<Comment> createComment(Long activeUserId, Long postId, String text);

  Comment save(Comment comment);

  void delete(Comment comment);

  List<Comment> findAll();

  boolean deleteById(Long id);

  Optional<Comment> findById(Long id);

  // findAllCommentsForPostId(Long postId)
}
