package com.danit.fs12.service;

import com.danit.fs12.entity.like.Like;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.exception.NotFoundException;
import com.danit.fs12.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService extends GeneralService<User> {
  private final PostRepository postRepository;

  public User getActiveUser(Long id) {

    //temporary to test
    User user = User.builder()
      .firstName("firstName")
      .lastName("lastName")
      .email("email")
      .phoneNumber("+380503332211")
      .age(30)
      .passwordHash("userPassHash")
      .build();

    return user;
  }

  public void followUser(Long userId, Long followedUserId) {
    Optional<User> userOpt = findById(userId);
    Optional<User> followedUserOpt = findById(followedUserId);
    if (userOpt.isEmpty() || followedUserOpt.isEmpty()) {
      String msg = String.format("Unable to establish connection between users with ids: %d and %d."
        + "User data can not be found in database", userId, followedUserId);
      throw new NotFoundException(msg);
    }

    User user = userOpt.get();
    User followedUser = followedUserOpt.get();
    user.getUsersFollowed().add(followedUser);
    save(user);
  }

  //    user.addConnection(userBeingFollowed);
  //    // ее должен являться методом сущности! Вынести в СЕРВИС!


  //  public void addConnection(User userBeingFollowed) {
  //    List<Long> idsOfFollowedUsers =
  //        this.connections
  //            .stream()
  //            .map(c -> c.getUserBeingFollowed().getId())
  //            .collect(Collectors.toList());
  //    if (!idsOfFollowedUsers.contains(userBeingFollowed.getId())) {
  //      Connection connection = new Connection(this, userBeingFollowed);
  //      connection.setUser(this);
  //      connection.setUserBeingFollowed(userBeingFollowed);
  //      this.connections.add(connection);
  //    }
  //  }

  public List<User> findUserWhoLikedPost(Long id) {
    Optional<Post> postOpt = postRepository.findById(id);

    if (postOpt.isEmpty()) {
      String msg = String.format("An error while trying to unwrap post Optional, post id: %d", id);
      throw new BadRequestException(msg);
    }

    Post post = postOpt.get();
    List<Like> likes = post.getLikes();
    List<User> usersList = likes.stream().map(Like::getUser).collect(Collectors.toList());
    return usersList;
  }

}
