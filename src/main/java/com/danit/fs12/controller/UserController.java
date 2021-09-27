package com.danit.fs12.controller;

import com.danit.fs12.controller.views.UserViews;
import com.danit.fs12.entity.user.UserEditIntroRq;
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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@Slf4j
@RestController
@RequestMapping(path = "/api/users")
@RequiredArgsConstructor
public class UserController {
  private final UserFacade userFacade;

  @GetMapping
  List<UserRs> findAll() {
    List<UserRs> allUsers = userFacade.findAll();
    return allUsers;
  }

  @JsonView(UserViews.Base.class)
  @GetMapping(path = "/find_by_name/{searchInput}")
  public ResponseEntity<List<UserRs>> findByName(@PathVariable String searchInput) {
    List<UserRs> foundUsers = userFacade.findUsersByName(searchInput);
    return ResponseEntity.ok(foundUsers);
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
  @JsonView(UserViews.Base.class)
  public ResponseEntity<List<UserRs>> findUsersWhoLikedPost(@PathVariable Long id) {
    List<UserRs> usersList = userFacade.findUsersWhoLikedPost(id);
    // in case User can not be found by id in Facade, an error will be thrown
    return ResponseEntity.ok(usersList);
  }

  @GetMapping(path = "/who_liked_comment/{id}")
  @JsonView(UserViews.Base.class)
  public ResponseEntity<List<UserRs>> findUsersWhoLikedComment(@PathVariable Long id) {
    List<UserRs> usersList = userFacade.findUsersWhoLikedComment(id);
    // in case User can not be found by id in Facade, an error will be thrown
    return ResponseEntity.ok(usersList);
  }

  @JsonView(UserViews.Profile.class)
  @GetMapping(path = "/profiles/{id}")
  public ResponseEntity<UserRs> getActiveProfile(@PathVariable Long id) {
    UserRs user = userFacade.findById(id);
    return ResponseEntity.ok(user);
  }

  @JsonView(UserViews.Profile.class)
  @PutMapping(path = "/profiles/intro")
  public ResponseEntity<UserRs> updateIntro(@RequestBody UserEditIntroRq rq) {
    System.out.println(rq);
    UserRs user = userFacade.updateIntro(rq);
    return ResponseEntity.ok(user);
  }

  // get the List of users that are connected with the active user
  @GetMapping(path = "/connections")
  @JsonView(UserViews.Base.class)
  public ResponseEntity<List<UserRs>> findConnectedUsers() {
    List<UserRs> usersList = userFacade.findConnectedUsers();
    return ResponseEntity.ok(usersList);
  }

  @GetMapping(path = "/mutual_connections/{activeUserId}/{userWhomId}")
  @JsonView(UserViews.Base.class)
  public ResponseEntity<List<UserRs>> getMutualConnections(
    @PathVariable Long activeUserId, @PathVariable Long userWhomId) {
    List<UserRs> mutualConnections = userFacade.getMutualConnections(activeUserId, userWhomId);
    return ResponseEntity.ok(mutualConnections);
  }

  @PutMapping(path = "/toggle_follow_user/{userId}")
  @JsonView(UserViews.Base.class)
  public ResponseEntity<UserRs> toggleFollowUser(@PathVariable Long userId) {
    UserRs user = userFacade.toggleFollowUser(userId);
    return ResponseEntity.ok(user);
  }

  @GetMapping(path = "/followed")
  @JsonView(UserViews.Base.class)
  public ResponseEntity<Set<UserRs>> getUsersFollowed() {
    Set<UserRs> followedUsers = userFacade.getUsersFollowed();
    return ResponseEntity.ok(followedUsers);
  }

  @GetMapping(path = "/following")
  @JsonView(UserViews.Base.class)
  public ResponseEntity<Set<UserRs>> getUsersFollowing() {
    Set<UserRs> followingUsers = userFacade.getUsersFollowing();
    return ResponseEntity.ok(followingUsers);
  }

  @GetMapping(path = "/potential_contacts") // "users you may know" (at frontend)
  @JsonView(UserViews.Base.class)
  public ResponseEntity<Set<UserRs>> getPotentialContacts() {
    Set<UserRs> potentialContacts = userFacade.getPotentialContacts();
    return ResponseEntity.ok(potentialContacts);
  }


}


