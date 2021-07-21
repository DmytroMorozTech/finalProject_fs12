package com.danit.fs12.service;

import com.danit.fs12.entity.User;
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
    return new User(
        "Gianluigi",
        "Donnarumma",
        "gian_donna@gmail.com",
        "393290233725",
        22,
        "gianni",
        "secret");
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
  public boolean createConnection(Long activeUserId, Long userBeingFollowedId) {
    Optional<User> userOpt = findById(activeUserId);
    Optional<User> userBeingFollowedOpt = findById(userBeingFollowedId);
    if (userOpt.isEmpty() || userBeingFollowedOpt.isEmpty()) {
      return false;
    }

    User user = userOpt.get();
    User userBeingFollowed = userBeingFollowedOpt.get();

    user.addConnection(userBeingFollowed);
    save(user);
    return true;
  }


}
