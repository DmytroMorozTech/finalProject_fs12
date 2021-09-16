package com.danit.fs12.repository;

import com.danit.fs12.entity.user.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends RepositoryInterface<User> {
  User findUserByEmail(String email);

  List<User> findUsersByFirstNameStartsWithIgnoreCase(String searchInput);

  List<User> findUsersByLastNameStartsWithIgnoreCase(String searchInput);
}