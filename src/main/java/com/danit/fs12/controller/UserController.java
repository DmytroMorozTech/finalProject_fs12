package com.danit.fs12.controller;

import com.danit.fs12.entity.User;
import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping(path = "/api/users")
// http://localhost:9000/api/users
@RequiredArgsConstructor
public class UserController {
  private final UserService userService;
  private final ModelMapper mm;

  // http://localhost:9000/api/users/{id}
  // get user by id
  @GetMapping(path = "{id}")
  public ResponseEntity<?> getOne(@PathVariable Long id) {
    Optional<User> user = userService.getOne(id);
    if (user.isEmpty()) {
      return ResponseEntity.notFound().build();
    }
    User foundUser = user.get();
//    UserDtoRes foundUserRs = mm.map(foundUser, UserDtoRes.class);
    return ResponseEntity.ok(foundUser);
  }

//  private final UserFacade userFacade;

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
