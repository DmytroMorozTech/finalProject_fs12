package com.danit.fs12.controller;

import com.danit.fs12.dto.comment.CommentDtoRq;
import com.danit.fs12.dto.comment.CommentDtoRs;
import com.danit.fs12.facade.CommentFacade;
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
@RequestMapping(path = "/api/comments")
@RequiredArgsConstructor
public class CommentController {
  private final CommentFacade commentFacade;

  @GetMapping
  List<CommentDtoRs> findAll() {
    return commentFacade.findAll();
  }

  @GetMapping(path = "{id}")
  public ResponseEntity<CommentDtoRs> findById(@PathVariable Long id) {
    CommentDtoRs comment = commentFacade.findById(id);
    // in case Comment can not be found by id in Facade, an error will be thrown
    return ResponseEntity.ok(comment);
  }

  @PostMapping
  public ResponseEntity<?> createComment(@Valid @RequestBody CommentDtoRq rq) {
    System.out.println("Create comment Controller");
    Long activeUserId = rq.getActiveUserId();
    Long postId = rq.getPostId();
    String text = rq.getText();

    CommentDtoRs comment = commentFacade.createComment(activeUserId, postId, text);
    return ResponseEntity.ok(comment);
  }

}
