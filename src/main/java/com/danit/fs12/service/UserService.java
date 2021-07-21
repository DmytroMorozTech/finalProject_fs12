package com.danit.fs12.service;

import com.danit.fs12.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

  User getActiveUser(Long id);

  User save(User user);

  void delete(User user);

  List<User> findAll();

  boolean deleteById(Long id);

  Optional<User> findById(Long id);

  boolean createConnection(Long activeUserId, Long userBeingFollowedId);

  User getOne(long l);
}
