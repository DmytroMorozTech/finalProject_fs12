package com.danit.fs12.controller;

import com.danit.fs12.dto.connection.ConnectionDtoRq;
import com.danit.fs12.dto.user.UserDtoRes;
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

  //  private final GenericsFacade<User> userFacade;
  //  don't touch this. And don't touch GenericsFacade<User> in general.
  //  I will finalize it soon. It has raw code there at the moment.

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
  public ResponseEntity<?> findById(@PathVariable Long id) { // wildCard should be replaced with UserDtoRes
    Optional<User> userOpt = userService.findById(id);
    boolean wasFound = userOpt.isPresent();
    return wasFound
      ? ResponseEntity.ok(userFacade.convertToDto(userOpt.get()))
      //            mm.map(userOpt.get(), UserDtoRes.class)
      : ResponseEntity.notFound().build();
  }

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    boolean wasDeleted = userService.deleteById(id);
    return wasDeleted
      ? ResponseEntity.status(HttpStatus.NO_CONTENT).build()
      : ResponseEntity.status(HttpStatus.NOT_FOUND).build();
  }
  // мы должны в методе deleteById бросить ошибку, если нам не удалось удалить пользователя
  // делаем это на уровне сервиса, где мы обращаемся к репозиторию
  // ошибка всплывет... а далее условие, как будто все прошло хорошо
  // тернарники убираем
  // эта вся схема на данный момент уже реализована для метода followUser (UserServiceImpl)

  // на фронте прописать логику, что если прителает какая-то ошибка, пользователю должен отображаться notification in UI
  //HttpStatus.NO_CONTENT - request was processed successfully, but we have no content to return to client


  // http://localhost:9000/api/users/connections/
  @PostMapping("/following")
  public ResponseEntity<?> followUser(@Valid @RequestBody ConnectionDtoRq rq) {
    Long userId = rq.getUserId();
    Long followedUserId = rq.getFollowedUserId();

    userService.followUser(userId, followedUserId);
    return ResponseEntity.status(HttpStatus.CREATED).build();
  }


}
