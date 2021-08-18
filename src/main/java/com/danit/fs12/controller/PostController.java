package com.danit.fs12.controller;

import com.danit.fs12.entity.post.PostRq;
import com.danit.fs12.entity.post.PostRs;
import com.danit.fs12.facade.PostFacade;
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
import java.util.List;

@Slf4j
@RestController
@RequestMapping(path = "/api/posts")
@RequiredArgsConstructor
public class PostController {
  private final PostFacade postFacade;

  @GetMapping
  @JsonView(PostViews.Base.class)
  ResponseEntity<List<PostRs>> getPostsForActiveUser(
    @RequestParam(defaultValue = "0") Integer pageNumber,
    @RequestParam(defaultValue = "4") Integer pageSize,
    @RequestParam(defaultValue = "id") String sortBy
  ) {

    Page<PostRs> pageOfPosts = postFacade.getPostsForActiveUser(pageNumber, pageSize, sortBy);
    List<PostRs> content = pageOfPosts.getContent();
    HttpHeaders responseHeaders = createHeaders(pageOfPosts);

    return ResponseEntity.ok()
      .headers(responseHeaders)
      .body(content);
  }

  @GetMapping("/bookmarked")
  @JsonView(PostViews.Base.class)
  ResponseEntity<List<PostRs>> getBookmarkedPosts(
    @RequestParam(defaultValue = "0") Integer pageNumber,
    @RequestParam(defaultValue = "4") Integer pageSize,
    @RequestParam(defaultValue = "id") String sortBy
  ) {
    Page<PostRs> pageOfBookmarkedPosts = postFacade.getBookmarkedPosts(pageNumber, pageSize, sortBy);
    List<PostRs> content = pageOfBookmarkedPosts.getContent();
    HttpHeaders responseHeaders = createHeaders(pageOfBookmarkedPosts);

    return ResponseEntity.ok()
      .headers(responseHeaders)
      .body(content);
  }

  @PostMapping(path = "/toggle_bookmark/{postId}")
  public ResponseEntity<PostRs> toggleBookmark(@PathVariable Long postId) {
    PostRs post = postFacade.toggleBookmark(postId);
    return ResponseEntity.ok(post);
  }

  @GetMapping("/all")
  List<PostRs> findAll() {
    return postFacade.findAll();
  }

  @GetMapping(path = "{id}")
  @JsonView(PostViews.Base.class)
  public ResponseEntity<PostRs> findById(@PathVariable Long id) {
    PostRs post = postFacade.findById(id);
    // in case Comment can not be found by id in Facade, an error will be thrown
    return ResponseEntity.ok(post);
  }

  @PostMapping
  public ResponseEntity<PostRs> createPost(@Valid @RequestBody PostRq rq) {
    PostRs post = postFacade.createPost(rq);
    return ResponseEntity.ok(post);
  }

  @PostMapping(path = "/toggle_like/{postId}")
  public ResponseEntity<PostRs> toggleLike(@PathVariable Long postId) {
    PostRs post = postFacade.toggleLike(postId);
    return ResponseEntity.ok(post);
  }

  /**
   * This is a helper method that takes in a Page of some entities as a parameter
   * and creates corresponding headers for the Response object that will be sent to frontend
   */
  private HttpHeaders createHeaders(Page page) {
    HttpHeaders responseHeaders = new HttpHeaders();
    responseHeaders.set("pageSize", Integer.toString(page.getSize()));
    responseHeaders.set("totalPages", Integer.toString(page.getTotalPages()));
    responseHeaders.set("hasMore", Boolean.toString(page.hasNext()));
    responseHeaders.set("pageNumber", Integer.toString(page.getNumber()));
    return responseHeaders;
  }


}