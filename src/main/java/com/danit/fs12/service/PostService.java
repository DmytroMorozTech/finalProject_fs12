package com.danit.fs12.service;

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
public class PostService extends GeneralService<Post> {
  private final UserRepository userRepository;
  private final PostRepository postRepository;

  public Post createPost(Post incomingPost, Long userId) {
    incomingPost.setId(null);

    Optional<User> userOpt = userRepository.findById(userId);
    if (userOpt.isEmpty()) {
      String msg = String.format("An error while trying to add post. "
        + "User with id %d could not be found in DB", userId);
      throw new BadRequestException(msg);
    }

    User user = userOpt.get();
    Post post = save(incomingPost);

    post.setUser(user);
    user.getPosts().add(post);
    userRepository.save(user);

    return post;
  }

}
