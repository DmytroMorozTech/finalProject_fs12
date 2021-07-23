package com.danit.fs12.service;

import com.danit.fs12.entity.User;
import com.danit.fs12.exception.NotFoundException;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

  private final UserRepository userRepository;

  @Override
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

  @Override
  public User save(User user) {
    return userRepository.save(user);
  }

  @Override
  public void delete(User user) {
    userRepository.delete(user);
  }

  @Override
  public List<User> findAll() {
    return userRepository.findAll();
  }

  @Override
  public boolean deleteById(Long id) {
    Optional<User> userOpt = findById(id);
    if (userOpt.isPresent()) {
      delete(userOpt.get());
      return true;
    }
    return false;
  }

  @Override
  public Optional<User> findById(Long id) {
    return userRepository.findById(id);
  }

  @Override
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

  @Override
  public User getOne(long id) {
    return userRepository.getOne(id);
  }


}
