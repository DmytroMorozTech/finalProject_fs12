package com.danit.fs12.service;

import com.danit.fs12.entity.User;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
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
  public void deleteById(Long id) {
    userRepository.deleteById(id);
  }

  @Override
  public Optional<User> findById(Long id) {
    return userRepository.findById(id);
  }


}
