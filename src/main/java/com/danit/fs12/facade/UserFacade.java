package com.danit.fs12.facade;

import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserRq;
import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class UserFacade extends GeneralFacade<User, UserRq, UserRs> {
  private final UserService userService;

  public List<UserRs> findUsersWhoLikedPost(Long id) {
    List<User> listUsers = userService.findUsersWhoLikedPost(id);

    List<UserRs> listUsersRs = listUsers.stream()
      .map(this::convertToDto).collect(Collectors.toList());

    return listUsersRs;
  }

  public List<UserRs> findUsersWhoLikedComment(Long id) {
    List<User> listUsers = userService.findUsersWhoLikedComment(id);

    List<UserRs> listUsersRs = listUsers.stream()
      .map(this::convertToDto).collect(Collectors.toList());

    return listUsersRs;
  }

  public UserRs getActiveUser() {
    User user = userService.getActiveUser();
    return convertToDto(user);
  }

  public UserRs findByEmailAndPassword(String email, String password) {
    User user = userService.findByEmailAndPassword(email, password);
    return convertToDto(user);
  }

  public void registerUser(String firstName,
                           String lastName,
                           Integer age,
                           String phoneNumber,
                           String password,
                           String email,
                           String avatar) {
    userService.registerUser(firstName, lastName, age, phoneNumber, password, email, avatar);
  }


}
