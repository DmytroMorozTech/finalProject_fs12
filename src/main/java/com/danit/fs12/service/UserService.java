package com.danit.fs12.service;

import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.NotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService extends GeneralService<User> {


  public User getActiveUser(Long id) {

    //temporary to test
    User user = User.builder()
      .firstName("firstName")
      .lastName("lastName")
      .email("email")
      .phoneNumber("+380503332211")
      .age(30)
      .login("userLogin")
      .password("userPassHash")
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

}
