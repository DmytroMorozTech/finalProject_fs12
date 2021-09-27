package com.danit.fs12.facade;

import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.post.PostRq;
import com.danit.fs12.entity.post.PostRs;
import com.danit.fs12.service.PostService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class PostFacade extends GeneralFacade<Post, PostRq, PostRs> {
  private final PostService postService;

  public PostRs createPost(PostRq rq) {
    Post post = postService.createPost(convertToEntity(rq));
    return convertToDto(post);
  }

  public PostRs toggleLike(Long postId) {
    Post post = postService.toggleLike(postId);
    return convertToDto(post);
  }

  public PostRs toggleBookmark(Long postId) {
    Post post = postService.toggleBookmark(postId);
    return convertToDto(post);
  }

  // after integration of Spring Security this method should be renamed to getPaginatedPosts
  public Page<PostRs> getPostsForActiveUser(Integer pageNumber, Integer pageSize, String sortBy) {
    Page<Post> postsPage = postService.getPostsForActiveUser(pageNumber, pageSize, sortBy);
    return postsPage.map(this::convertToDto);
  }

  public Page<PostRs> getBookmarkedPosts(Integer pageNumber, Integer pageSize, String sortBy) {
    Page<Post> postsPage = postService.getBookmarkedPosts(pageNumber, pageSize, sortBy);

    return postsPage.map(this::convertToDto);
  }

  public List<PostRs> getAllPostsForActiveUser() {
    List<Post> posts = postService.getAllPostsForActiveUser();
    return posts.stream().map(this::convertToDto).collect(Collectors.toList());
  }
}

