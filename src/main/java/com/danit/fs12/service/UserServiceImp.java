package com.danit.fs12.service;

import com.danit.fs12.entity.User;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

  private final UserRepository userRepository;

  @Override
  public User getActiveUser(long id) {

    //temporary to test
    return new User();
  }
}
