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

  public List<UserRs> findUserWhoLikedPost(Long id) {
    List<User> listUsers = userService.findUserWhoLikedPost(id);

    List<UserRs> listUsersRs = listUsers.stream()
      .map(this::convertToDto).collect(Collectors.toList());

    return listUsersRs;
  }


}
