package com.danit.fs12.controller;

import com.danit.fs12.facade.UserFacade;
import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api/users")
@RestController
@RequiredArgsConstructor
public class UserController {

  private final UserService userService;
  private final UserFacade userFacade;

//  @GetMapping("/current")
//  public UserDtoRes getActiveUser() {
//
//    // temporary active user id is hardcoded, when we realize "login" it will be changed;
//    long activeUserId = 1;
//    UserDtoRes activeUser = userFacade.getActiveUser(activeUserId);
//    log.debug("Active user: " + activeUser.getLogin());
//    return activeUser;
//  }
}
