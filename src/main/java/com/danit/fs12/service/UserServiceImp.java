package com.danit.fs12.service;

import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

  private final UserRepository userRepository;

  @Override
  public User getActiveUser(Long id) {

    //temporary to test
    return new User(1L,
        "Gianluigi",
        "Donnarumma",
        "gian_donna@gmail.com",
        "393290233725",
        22,
        "gianni",
        "secret", Arrays.asList(), Arrays.asList(), Arrays.asList());
  }
}
