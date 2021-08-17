package com.danit.fs12.service;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.comment.CommentRq;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService extends GeneralService<Comment> {
  private final UserRepository userRepository;
  private final PostRepository postRepository;
  private final UserService userService;

  public Long activeUserId () {
    return userService.getActiveUser().getId();
  }

  public Comment createComment(CommentRq rq) {
    Long postId = rq.getPostId();
    String text = rq.getText();

    User user = userRepository.findEntityById(activeUserId());
    Post post = postRepository.findEntityById(postId);

    Comment comment = save(new Comment(text, post, user));
    post.getComments().add(comment);
    user.getComments().add(comment);

    postRepository.save(post);
    userRepository.save(user);

    return comment;
  }

  public List<Comment> getCommentsForPost(Long postId) {
    return postRepository.findEntityById(postId).getComments();
  }
}
