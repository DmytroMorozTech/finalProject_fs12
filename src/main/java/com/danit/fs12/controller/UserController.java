package com.danit.fs12.controller;

import com.danit.fs12.dto.UserDtoRes;
import com.danit.fs12.entity.User;
import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping(path = "/api/users")
// http://localhost:9000/api/users
@RequiredArgsConstructor
public class UserController {
  private final UserService userService;
  private final ModelMapper mm;


  @GetMapping
  List<UserDtoRes> findAll() {
    List<User> users = userService.findAll();
    List<UserDtoRes> usersRs = users
        .stream()
        .map(c -> mm.map(c, UserDtoRes.class))
        .collect(Collectors.toList());

    return usersRs;
  }

  // http://localhost:9000/api/users/{id}
  // get user by id
  @GetMapping(path = "{id}")
  public ResponseEntity<?> getOne(@PathVariable Long id) {
    Optional<User> user = userService.getOne(id);
    if (user.isEmpty()) {
      return ResponseEntity.notFound().build();
    }
    User foundUser = user.get();
    UserDtoRes foundUserRs = mm.map(foundUser, UserDtoRes.class);
    return ResponseEntity.ok(foundUserRs);
  }

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    Optional<User> userOpt = userService.getOne(id);
    if (userOpt.isPresent()) {
      userService.deleteById(id);
      boolean wasDeleted = userService.getOne(id).isEmpty();
      if (wasDeleted) {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
      }
      //HttpStatus.NO_CONTENT - request was processed successfully, but we have no content to return to client
    }

    return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
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
