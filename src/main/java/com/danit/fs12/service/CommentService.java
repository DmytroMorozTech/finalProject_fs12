package com.danit.fs12.service;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.comment.CommentRq;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService extends GeneralService<Comment> {
  private final UserRepository userRepository;
  private final PostRepository postRepository;
  private final Long hardCodedActiveUserId = 1L; // later we will get this id from SpringSecurityContext

  public Comment createComment(CommentRq rq) {
    Long postId = rq.getPostId();
    String text = rq.getText();

    Optional<User> userOpt = userRepository.findById(hardCodedActiveUserId);
    Optional<Post> postOpt = postRepository.findById(postId);
    if (userOpt.isEmpty() || postOpt.isEmpty()) {
      String msg = String.format("An error while trying to add new comment. Extra data: "
        + "activeUserId: %d, postId: %d, text: %s", hardCodedActiveUserId, postId, text);
      throw new BadRequestException(msg);
    }

    User user = userOpt.get();
    Post post = postOpt.get();
    Comment comment = save(new Comment(text)); // we have id assigned, created_date, modified_date, text
    comment.setUser(user);
    comment.setPost(post);
    post.getComments().add(comment);
    user.getComments().add(comment);

    postRepository.save(post);
    userRepository.save(user);

    return comment;
  }

  public List<Comment> getCommentsForPost(Long postId) {
    Optional<Post> postOpt = postRepository.findById(postId);
    if (postOpt.isEmpty()) {
      String msg = String.format("An error while trying to unwrap post Optional with id %d", postId);
      throw new BadRequestException(msg);
    }

    return postOpt.get().getComments();
  }
}
