package com.danit.fs12.controller;

import com.danit.fs12.dto.user.UserDtoRs;
import com.danit.fs12.facade.UserFacade;
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
  List<UserDtoRs> findAll() {
    List<UserDtoRs> allUsers = userFacade.findAll();
    return allUsers;
  }

  // http://localhost:9000/api/users/{id}
  // get user by id
  @GetMapping(path = "{id}")
  public ResponseEntity<UserDtoRs> findById(@PathVariable Long id) {
    UserDtoRs user = userFacade.findById(id);
    // in case User can not be found by id in Facade, an error will be thrown
    return ResponseEntity.ok(user);
  }

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    userFacade.deleteById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }


  // мы должны в методе deleteById бросить ошибку, если нам не удалось удалить пользователя
  // делаем это на уровне сервиса, где мы обращаемся к репозиторию
  // ошибка всплывет... а далее условие, как будто все прошло хорошо
  // тернарники убираем
  // эта вся схема на данный момент уже реализована для метода followUser (UserServiceImpl)

  // на фронте прописать логику, что если прителает какая-то ошибка, пользователю должен отображаться notification in UI
  //HttpStatus.NO_CONTENT - request was processed successfully, but we have no content to return to client


//  // http://localhost:9000/api/users/connections/
//  @PostMapping("/following")
//  public ResponseEntity<?> followUser(@Valid @RequestBody FollowingDtoRq rq) {
//    Long userId = rq.getUserId();
//    Long followedUserId = rq.getFollowedUserId();
//
//    userService.followUser(userId, followedUserId);
//    return ResponseEntity.status(HttpStatus.CREATED).build();
//  }


}

// wildCards should be replaced with UserDtoRes
