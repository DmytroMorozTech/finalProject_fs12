package com.danit.fs12.service;

import com.danit.fs12.entity.Comment;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface CommentService {

  public Comment createComment(String text);

  public Comment save(Comment comment);

  public void delete(Comment comment);

  public List<Comment> findAll();

  public void deleteById(Long id);

  public Optional<Comment> getOne(Long id);

  // findAllCommentsForPostId(Long postId)
}
