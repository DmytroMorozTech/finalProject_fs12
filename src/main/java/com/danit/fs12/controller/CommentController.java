package com.danit.fs12.controller;

import com.danit.fs12.controller.views.CommentViews;
import com.danit.fs12.entity.comment.CommentRq;
import com.danit.fs12.entity.comment.CommentRs;
import com.danit.fs12.facade.CommentFacade;
import com.danit.fs12.utils.HeadersUtils;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import java.util.List;

@Slf4j
@RestController
@RequestMapping(path = "/api/comments")
@RequiredArgsConstructor
public class CommentController {
  private final CommentFacade commentFacade;

  @GetMapping
  List<CommentRs> findAll() {
    return commentFacade.findAll();
  }

  @GetMapping(path = "{id}")
  public ResponseEntity<CommentRs> findById(@PathVariable Long id) {
    CommentRs comment = commentFacade.findById(id);
    // in case Comment can not be found by id in Facade, an error will be thrown
    return ResponseEntity.ok(comment);
  }

  @PostMapping
  @JsonView(CommentViews.Base.class)
  public ResponseEntity<?> createComment(@Valid @RequestBody CommentRq rq) {
    CommentRs comment = commentFacade.createComment(rq);
    return ResponseEntity.ok(comment);
  }

  @GetMapping(path = "/for_post/{postId}")
  @JsonView(CommentViews.Base.class)
  public ResponseEntity<List<CommentRs>> getCommentsForPostPaginated(
    @PathVariable Long postId,
    @RequestParam(defaultValue = "0") Integer pageNumber,
    @RequestParam(defaultValue = "3") @Max(100) Integer pageSize
  ) {
    Page<CommentRs> pageOfComments = commentFacade.getCommentsForPostPaginated(postId, pageNumber, pageSize);
    List<CommentRs> content = pageOfComments.getContent();
    HttpHeaders responseHeaders = HeadersUtils.createPaginationHeaders(pageOfComments);

    return ResponseEntity.ok()
      .headers(responseHeaders)
      .body(content);
  }

  @PostMapping(path = "/toggle_like/{commentId}")
  @JsonView(CommentViews.Base.class)
  public ResponseEntity<CommentRs> toggleCommentLike(@PathVariable Long commentId) {
    CommentRs comment = commentFacade.toggleCommentLike(commentId);
    return ResponseEntity.ok(comment);
  }

}
