package com.danit.fs12.service;

import com.danit.fs12.entity.bookmark.Bookmark;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.postlike.PostLike;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService extends GeneralService<Post> {
  private final UserService userService;
  private final NotificationService notificationService;
  private final PostRepository postRepository;

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
    User user = userService.getActiveUser();
    incomingPost.setUser(user);
    Post post = save(incomingPost);

    user.getPosts().add(post);
    userService.save(user);

    HashMap<String, Long> data = new HashMap<>();
    data.put("post_id", post.getId());
    data.put("related_user_id", activeUserId());
    notificationService.createNotificationNewPost(data);
    return post;
  }

  public Post toggleLike(Long postId) {
    Post post = findEntityById(postId);
    Boolean postIsLiked = post.getIsLikedByActiveUser();
    Long postAuthorId = post.getUser().getId();
    if (postIsLiked) {
      post.getPostLikes().removeIf(l -> Objects.equals(l.getUser().getId(), activeUserId()));
      notificationService.updateNotificationDecrementLike(postId, postAuthorId);
      return save(post);
    } else {
      User user = userService.getActiveUser();
      PostLike postLike = new PostLike(user, post);
      post.getPostLikes().add(postLike);

      notificationService.createOrUpdateNotificationAddLike(postId, postAuthorId);
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
      User user = userService.getActiveUser();
      Bookmark bookmark = new Bookmark(user, post);
      post.getBookmarks().add(bookmark);
      return save(post);
    }
  }

  public Page<Post> getPostsForActiveUser(Integer pageNumber, Integer pageSize, String sortBy) {
    List<Long> followedUsersIds = userService.getUsersFollowed()
      .stream().map(user -> user.getId()).collect(Collectors.toList());
    PageRequest pageRequest = PageRequest.of(pageNumber, pageSize, Sort.Direction.DESC, sortBy);
    followedUsersIds.add(userService.getActiveUser().getId());
    // active user should also see their own posts in Feed

    return postRepository.getPostsForActiveUserPaginated(followedUsersIds, pageRequest);
  }

  public Page<Post> getBookmarkedPosts(Integer pageNumber, Integer pageSize, String sortBy) {
    PageRequest pageRequest = PageRequest.of(pageNumber, pageSize, Sort.Direction.DESC, sortBy);

    User user = userService.getActiveUser();
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

  public List<Post> getAllPostsForActiveUser() {
    List<Long> followedUsersIds = userService.getUsersFollowed()
      .stream().map(user -> user.getId()).collect(Collectors.toList());

    List<Post> posts = postRepository.getAllPostsForActiveUser(followedUsersIds);
    return posts;
  }
}
