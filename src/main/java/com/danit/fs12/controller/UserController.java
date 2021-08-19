package com.danit.fs12.controller;

import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.facade.UserFacade;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping(path = "/api/users")
// http://localhost:9000/api/users
@RequiredArgsConstructor
public class UserController {
  private final UserFacade userFacade;

  @GetMapping
  List<UserRs> findAll() {
    List<UserRs> allUsers = userFacade.findAll();
    return allUsers;
  }

  @JsonView(UserViews.Profile.class)
  @GetMapping(path = "{id}")
  public ResponseEntity<UserRs> findById(@PathVariable Long id) {
    UserRs user = userFacade.findById(id);
    return ResponseEntity.ok(user);
  }

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    userFacade.deleteById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @GetMapping(path = "/who_liked_post/{id}")
  public ResponseEntity<List<UserRs>> findUsersWhoLikedPost(@PathVariable Long id) {
    List<UserRs> usersList = userFacade.findUsersWhoLikedPost(id);
    // in case User can not be found by id in Facade, an error will be thrown
    return ResponseEntity.ok(usersList);
  }

  @JsonView(UserViews.Profile.class)
  @GetMapping(path = "/profiles/{id}")
  public ResponseEntity<UserRs> getActiveProfile(@PathVariable Long id) {
    UserRs user = userFacade.findById(id);
    return ResponseEntity.ok(user);
  }

}


