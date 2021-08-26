package com.danit.fs12.service;

import com.danit.fs12.entity.bookmark.Bookmark;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.postlike.PostLike;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService extends GeneralService<Post> {
  private final UserRepository userRepository;
  private final UserService userService;

  public Long activeUserId() {
    return userService.getActiveUser().getId();
  }

  public Post createPost(Post incomingPost) {
    /**
     * There was an issue when creating new Post using Post Controller.
     * ModelMapper was taking the userId from PostRq and mapped it automatically to id of Post.
     * This totally broke the functioning of PostService. So fat that we do not want to use this line of code:
     * incomingPost.setId(null);
     * additional configuration had to be done to ModelMapper -> setMatchingStrategy(MatchingStrategies.STRICT)
     * After that the problem was gone and implicit casting was ceased.
     */
    User user = userRepository.findEntityById(activeUserId());
    incomingPost.setUser(user);
    Post post = save(incomingPost);

    user.getPosts().add(post);
    userRepository.save(user);

    return post;
  }

  public Post toggleLike(Long postId) {
    Post post = findEntityById(postId);
    //    Boolean postIsLiked = post.getIsLikedByActiveUser();
    List<PostLike> postLikes = post.getPostLikes();
    Boolean postIsLiked = postLikes.stream().anyMatch(l -> Objects.equals(l.getUser().getId(), activeUserId()));

    if (postIsLiked) {
      post.getPostLikes().removeIf(l -> Objects.equals(l.getUser().getId(), activeUserId()));
      return save(post);
    } else {
      User user = userRepository.findEntityById(activeUserId());
      PostLike postLike = new PostLike(user, post);
      post.getPostLikes().add(postLike);
      return save(post);
    }
  }

  public Post toggleBookmark(Long postId) {
    Post post = findEntityById(postId);
    //    Boolean postIsBookmarked = post.getIsBookmarkedByActiveUser();
    List<Bookmark> bookmarks = post.getBookmarks();
    Boolean postIsBookmarked = bookmarks.stream()
      .anyMatch(bookmark -> Objects.equals(bookmark.getUser().getId(), activeUserId()));

    if (postIsBookmarked) {
      post.getBookmarks().removeIf(bookmark -> Objects.equals(bookmark.getUser().getId(), activeUserId()));
      return save(post);
    } else {
      User user = userRepository.findEntityById(activeUserId());
      Bookmark bookmark = new Bookmark(user, post);
      post.getBookmarks().add(bookmark);
      return save(post);
    }
  }

  public Page<Post> getPostsForActiveUser(Integer pageNumber, Integer pageSize, String sortBy) {
    PageRequest pageRequest = PageRequest.of(pageNumber, pageSize, Sort.Direction.DESC, sortBy);
    return findAll(pageRequest);
  }

  public Page<Post> getBookmarkedPosts(Integer pageNumber, Integer pageSize, String sortBy) {
    PageRequest pageRequest = PageRequest.of(pageNumber, pageSize, Sort.Direction.DESC, sortBy);

    User user = userRepository.findEntityById(activeUserId());
    List<Long> postsIds = user.getBookmarks().stream()
      .map(b -> b.getPost().getId())
      .collect(Collectors.toList());

    List<Post> listOfBookmarkedPosts = findAllById(postsIds);
    long totalPosts = listOfBookmarkedPosts.size();

    int maxArrIndex = (int) totalPosts;
    int startIndex = pageNumber * pageSize;
    int endIndex = Math.min((startIndex + pageSize), maxArrIndex);
    return new PageImpl<>(listOfBookmarkedPosts.subList(startIndex, endIndex), pageRequest, totalPosts);
  }
}
