package com.danit.fs12.service;

import com.danit.fs12.entity.Comment;
import com.danit.fs12.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentServiceImp implements CommentService {

  private final CommentRepository commentRepository;

  @Override
  public Comment createComment(String text) {
    return commentRepository.save(new Comment(text));
  }

  @Override
  public Comment save(Comment comment) {
    return commentRepository.save(comment);
  }

  @Override
  public void delete(Comment comment) {
    commentRepository.delete(comment);
  }

  @Override
  public List<Comment> findAll() {
    return commentRepository.findAll();
  }

  @Override
  public void deleteById(Long id) {
    commentRepository.deleteById(id);
  }

  @Override
  public Optional<Comment> getOne(Long id) {
    return commentRepository.findById(id);
  }
}
