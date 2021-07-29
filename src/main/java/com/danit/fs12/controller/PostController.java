package com.danit.fs12.controller;

import com.danit.fs12.dto.post.PostDtoRq;
import com.danit.fs12.dto.post.PostDtoRs;
import com.danit.fs12.facade.PostFacade;
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
@RequestMapping(path = "/api/posts")
@RequiredArgsConstructor
public class PostController {
  private final PostFacade postFacade;

  @GetMapping
  List<PostDtoRs> findAll() {
    return postFacade.findAll();
  }

  @GetMapping(path = "{id}")
  public ResponseEntity<PostDtoRs> findById(@PathVariable Long id) {
    PostDtoRs post = postFacade.findById(id);
    // in case Comment can not be found by id in Facade, an error will be thrown
    return ResponseEntity.ok(post);
  }

  @PostMapping
  public ResponseEntity<PostDtoRs> createPost(@Valid @RequestBody PostDtoRq rq) {
    PostDtoRs post = postFacade.createPost(rq);
    return ResponseEntity.ok(post);
  }

}
