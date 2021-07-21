package com.danit.fs12.controller;

import com.danit.fs12.dto.user.UserDtoRes;
import com.danit.fs12.dto.connection.ConnectionDtoRq;
import com.danit.fs12.entity.User;
import com.danit.fs12.facade.UserFacade;
import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
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
  private final UserFacade userFacade;


  @GetMapping
  List<UserDtoRes> findAll() {
    List<User> users = userService.findAll();
    List<UserDtoRes> usersRs = users
        .stream()
        .map(userFacade::convertToDto)
        .collect(Collectors.toList());

    return usersRs;
  }

  // http://localhost:9000/api/users/{id}
  // get user by id
  @GetMapping(path = "{id}")
  public ResponseEntity<?> findById(@PathVariable Long id) {
    Optional<User> userOpt = userService.findById(id);
    if (userOpt.isEmpty()) return ResponseEntity.notFound().build();

    UserDtoRes userRs = mm.map(userOpt.get(), UserDtoRes.class);
    return ResponseEntity.ok(userRs);
  }

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    Optional<User> userOpt = userService.findById(id);
    if (userOpt.isPresent()) {
      userService.deleteById(id);
      boolean wasDeleted = userService.findById(id).isEmpty();
      if (wasDeleted) {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
      }
      //HttpStatus.NO_CONTENT - request was processed successfully, but we have no content to return to client
    }

    return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
  }

  // http://localhost:9000/api/users/connections/
  @PostMapping("/connections")// add new Connection with another User
  public ResponseEntity<?> createConnection(@Valid @RequestBody ConnectionDtoRq rq) {
    Long activeUserId = rq.getActiveUserId();
    Long userBeingFollowedId = rq.getUserBeingFollowedId();

    Optional<User> userOpt = userService.findById(activeUserId);
    Optional<User> userBeingFollowedOpt = userService.findById(userBeingFollowedId);
    if (userOpt.isEmpty() || userBeingFollowedOpt.isEmpty()) {
      return
          ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    User user = userOpt.get();
    User userBeingFollowed = userBeingFollowedOpt.get();

//    Connection connection = connectionService.createConnection(user,userBeingFollowed);
//    this one seems to be not necessary

    user.addConnection(userBeingFollowed);
    userService.save(user);

    return ResponseEntity
        .status(HttpStatus.CREATED)
        .build();
  }


}
