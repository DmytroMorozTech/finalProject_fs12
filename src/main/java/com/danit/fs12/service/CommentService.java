package com.danit.fs12.service;

import com.danit.fs12.entity.Comment;
import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CommentService extends GeneralService<Comment> {
  private final UserRepository userRepository;
  private final PostRepository postRepository;

  public Comment createComment(Long activeUserId, Long postId, String text) {
    Optional<User> userOpt = userRepository.findById(activeUserId);
    Optional<Post> postOpt = postRepository.findById(postId);
    if (userOpt.isEmpty() || postOpt.isEmpty()) {
      String msg = String.format("An error while trying to add new comment. Extra data: "
        + "activeUserId: %d, postId: %d, text: %s", activeUserId, postId, text);
      throw new BadRequestException(msg);
    }

    User user = userOpt.get();
    Post post = postOpt.get();
    Comment comment = save(new Comment(text));
    post.addComment(comment);
    user.addComment(comment);

    postRepository.save(post);
    userRepository.save(user);

    return comment;
  }

}
