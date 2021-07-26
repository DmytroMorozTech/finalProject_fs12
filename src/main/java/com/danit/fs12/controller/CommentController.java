package com.danit.fs12.controller;

import com.danit.fs12.dto.comment.CommentDtoRs;
import com.danit.fs12.entity.Comment;
import com.danit.fs12.facade.CommentFacade;
import com.danit.fs12.service.CommentService;
import com.danit.fs12.service.PostService;
import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequestMapping(path = "/api/comments")
// http://localhost:9000/api/comments
@RequiredArgsConstructor
public class CommentController {
  private final CommentService commentService;
  private final UserService userService;
  private final PostService postService;
  private final CommentFacade commentFacade;

  private final ModelMapper mm;

  @GetMapping
  List<CommentDtoRs> findAll() {
    List<Comment> comments = commentService.findAll();
    List<CommentDtoRs> commentsRs = comments
      .stream()
      .map(commentFacade::convertToDto)
      .collect(Collectors.toList());

    return commentsRs;
  }

  // http://localhost:9000/api/comments/{id}
  // get comment by id
  @GetMapping(path = "{id}")
  public ResponseEntity<?> findById(@PathVariable Long id) {
    Optional<Comment> commentOpt = commentService.findById(id);

    boolean wasFound = commentOpt.isPresent();
    return wasFound
      ? ResponseEntity.ok(commentFacade.convertToDto(commentOpt.get()))
      : ResponseEntity.notFound().build();
  }

  // http://localhost:9000/api/comments/
//  @PostMapping // create new Comment
//  public ResponseEntity<?> createComment(@Valid @RequestBody CommentDtoRq rq) {
//    Long activeUserId = rq.getActiveUserId();
//    Long postId = rq.getPostId();
//    String text = rq.getText();
//
//    Optional<Comment> commentOpt = commentService.createComment(activeUserId, postId, text);
//    boolean wasCreated = commentOpt.isPresent();
//    return wasCreated
//      ? ResponseEntity.status(HttpStatus.CREATED).body(commentFacade.convertToDto(commentOpt.get()))
//      : ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
//
//  }

}
