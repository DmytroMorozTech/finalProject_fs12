package com.danit.fs12.service;

import com.danit.fs12.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {

  User getActiveUser(Long id);

  public User save(User user);

  public void delete(User user);

  public List<User> findAll();

  public void deleteById(Long id);

  public Optional<User> getOne(Long id);

}
