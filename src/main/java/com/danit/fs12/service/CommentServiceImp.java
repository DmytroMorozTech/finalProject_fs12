package com.danit.fs12.service;

import com.danit.fs12.dto.comment.CommentDtoRes;
import com.danit.fs12.entity.Comment;
import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import com.danit.fs12.repository.CommentRepository;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentServiceImp implements CommentService {

  private final CommentRepository commentRepository;
  private final UserRepository userRepository;
  private final PostRepository postRepository;

  @Override
  public Optional<Comment> createComment(Long activeUserId, Long postId, String text) {

    Optional<User> userOpt = userRepository.findById(activeUserId);
    Optional<Post> postOpt = postRepository.findById(postId);
    if (userOpt.isEmpty() || postOpt.isEmpty()) {
      return Optional.empty();
    }
    User user = userOpt.get();
    Post post = postOpt.get();

    Comment comment = save(new Comment(text));

    post.addComment(comment);
    user.addComment(comment);

    postRepository.save(post);
    userRepository.save(user);

    return Optional.of(comment);
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
  public boolean deleteById(Long id) {
    Optional<Comment> commentOpt = commentRepository.findById(id);
    if (commentOpt.isPresent()) {
      delete(commentOpt.get());
      return true;
    }
    return false;
  }

  @Override
  public Optional<Comment> findById(Long id) {
    return commentRepository.findById(id);
  }
}
