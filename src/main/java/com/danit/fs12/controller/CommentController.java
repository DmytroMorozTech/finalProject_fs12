package com.danit.fs12.controller;

import com.danit.fs12.dto.comment.CommentDtoRes;
import com.danit.fs12.dto.comment.CommentDtoRq;
import com.danit.fs12.entity.Comment;
import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import com.danit.fs12.service.CommentService;
import com.danit.fs12.service.PostService;
import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
@RequestMapping(path = "/api/comments")
// http://localhost:9000/api/comments
@RequiredArgsConstructor
public class CommentController {
  private final CommentService commentService;
  private final UserService userService;
  private final PostService postService;

  private final ModelMapper mm;


  @GetMapping
  List<CommentDtoRes> findAll() {
    List<Comment> comments = commentService.findAll();
    List<CommentDtoRes> commentsRs = comments
        .stream()
        .map(c -> mm.map(c, CommentDtoRes.class))
        .collect(Collectors.toList());

    return commentsRs;
  }

  // http://localhost:9000/api/comments/{id}
  // get comment by id
  @GetMapping(path = "{id}")
  public ResponseEntity<?> getOne(@PathVariable Long id) {
    Optional<Comment> comment = commentService.getOne(id);
    if (comment.isEmpty()) {
      return ResponseEntity.notFound().build();
    }
    Comment foundComment = comment.get();
    CommentDtoRes foundCommentRs = mm.map(foundComment, CommentDtoRes.class);
    return ResponseEntity.ok(foundCommentRs);
  }

  // http://localhost:9000/api/comments/
  @PostMapping // create new Comment
  public ResponseEntity<?> createComment(@Valid @RequestBody CommentDtoRq rq) {
    Long activeUserId = rq.getActiveUserId();
    Long postId = rq.getPostId();
    String text = rq.getText();

    Optional<User> userOpt = userService.findById(activeUserId);
    Optional<Post> postOpt = postService.getOne(postId);
    if (userOpt.isEmpty() || postOpt.isEmpty()) {
      return
          ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    User user = userOpt.get();
    Post post = postOpt.get();

    Comment comment = commentService.createComment(text);

    post.addComment(comment);
    user.addComment(comment);

    CommentDtoRes commentRs = mm.map(comment, CommentDtoRes.class);
    postService.save(post);
    userService.save(user);

    return ResponseEntity
        .status(HttpStatus.CREATED)
        .body(commentRs);
  }


}
