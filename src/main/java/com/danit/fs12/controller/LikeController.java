package com.danit.fs12.controller;

import com.danit.fs12.entity.like.LikeRq;
import com.danit.fs12.entity.like.LikeRs;
import com.danit.fs12.facade.LikeFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequestMapping(path = "/api/likes")
@RequiredArgsConstructor
public class LikeController {
  private final LikeFacade likeFacade;

  @GetMapping
  List<LikeRs> findAll() {
    return likeFacade.findAll();
  }

  @GetMapping(path = "{id}")
  public ResponseEntity<LikeRs> findById(@PathVariable Long id) {
    LikeRs like = likeFacade.findById(id);
    // in case Like can not be found by id in Facade, an error will be thrown
    return ResponseEntity.ok(like);
  }

  @PostMapping
  public ResponseEntity<?> createLike(@Valid @RequestBody LikeRq rq) {
    System.out.println("Create like Controller");
    Long activeUserId = rq.getActiveUserId();
    Long postId = rq.getPostId();

    LikeRs like = likeFacade.createLike(activeUserId, postId);
    return ResponseEntity.ok(like);
  }

}
