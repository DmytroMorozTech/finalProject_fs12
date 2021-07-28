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
public class PostService extends GeneralService<Post> {
  private final UserRepository userRepository;
  private final PostRepository postRepository;

  public Post createPost(Long activeUserId, String title, String mainText) {
    Optional<User> userOpt = userRepository.findById(activeUserId);
    if (userOpt.isEmpty()) {
      String msg = String.format("An error while trying to add post. "
        + "User with id %d could not be found in DB", activeUserId);
      throw new BadRequestException(msg);
    }

    User user = userOpt.get();
    Post post = save(new Post(title,mainText));
    user.addPost(post);

    userRepository.save(user);

    return post;
  }

}
