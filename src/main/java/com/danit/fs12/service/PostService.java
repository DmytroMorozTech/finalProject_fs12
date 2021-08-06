package com.danit.fs12.service;

import com.danit.fs12.entity.like.Like;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.repository.CommentRepository;
import com.danit.fs12.repository.LikeRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostService extends GeneralService<Post> {
  private final UserRepository userRepository;
  private final LikeRepository likeRepository;
  private final CommentRepository commentRepository;
  private final Long hardCodedActiveUserId = 1L; // later we will get this id from SpringSecurityContext

  public Post createPost(Post incomingPost) {
    /**
     * There was an issue when creating new Post using Post Controller.
     * ModelMapper was taking the userId from PostRq and mapped it automatically to id of Post.
     * This totally broke the functioning of PostService. So fat that we do not want to use this line of code:
     * incomingPost.setId(null);
     * additional configuration had to be done to ModelMapper -> setMatchingStrategy(MatchingStrategies.STRICT)
     * After that the problem was gone and implicit casting was ceased.
     */

    Optional<User> userOpt = userRepository.findById(hardCodedActiveUserId);
    if (userOpt.isEmpty()) {
      String msg = String.format("An error while trying to add post. "
        + "User with id %d could not be found in DB", hardCodedActiveUserId);
      throw new BadRequestException(msg);
    }

    User user = userOpt.get();
    incomingPost.setUser(user);
    Post post = save(incomingPost);

    user.getPosts().add(post);
    userRepository.save(user);

    return post;
  }

  public Post toggleLike(Long postId) {
    Optional<Post> postOpt = findById(postId);
    if (postOpt.isEmpty()) {
      String msg = String.format("An error while trying to find post with id %d. ", postId);
      throw new BadRequestException(msg);
    }
    // логику выше нужно вынести в отдельную функцию
    //    Post post = newMethod(postId)  inside check

    Post post = postOpt.get();
    Boolean postIsLiked = post.getIsLikedByActiveUser();

    if (postIsLiked) {
      post.getLikes().removeIf(l -> Objects.equals(l.getUser().getId(), hardCodedActiveUserId));
      return save(post);
    } else {
      Optional<User> userOpt = userRepository.findById(hardCodedActiveUserId);
      if (userOpt.isEmpty()) {
        String msg = String.format("An error while trying to unwrap UserOptional with id %d. ", hardCodedActiveUserId);
        throw new BadRequestException(msg);
      }
      User user = userOpt.get();
      Like like = new Like(user, post);
      post.getLikes().add(like);
      return save(post);
    }
  }
}
