package com.danit.fs12.service;

import com.danit.fs12.entity.like.Like;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LikeService extends GeneralService<Like> {
  private final UserRepository userRepository;
  private final PostRepository postRepository;

  public Like createLike(Long activeUserId, Long postId) {
    Optional<User> userOpt = userRepository.findById(activeUserId);
    Optional<Post> postOpt = postRepository.findById(postId);
    if (userOpt.isEmpty() || postOpt.isEmpty()) {
      String msg = String.format("An error while trying to add new like. Extra data: "
        + "activeUserId: %d, postId: %d", activeUserId, postId);
      throw new BadRequestException(msg);
    }
    User user = userOpt.get();
    Post post = postOpt.get();
    Like like = save(new Like()); // not sure if its right!!
    post.getLikes().add(like);
    user.getLikes().add(like);

    postRepository.save(post);
    userRepository.save(user);
    return like;
  }
}
