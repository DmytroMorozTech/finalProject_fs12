package com.danit.fs12.service;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.comment.CommentRq;
import com.danit.fs12.entity.commentlike.CommentLike;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.CommentRepository;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CommentService extends GeneralService<Comment> {
  private final UserRepository userRepository;
  private final PostRepository postRepository;
  private final UserService userService;
  private final NotificationService notificationService;
  private final CommentRepository commentRepository;

  public Long activeUserId() {
    return userService.getActiveUser().getId();
  }

  public Comment createComment(CommentRq rq) {
    Long postId = rq.getPostId();
    String text = rq.getText();
    List<CommentLike> commentLikes = new ArrayList<>();

    User user = userRepository.findEntityById(activeUserId());
    Post post = postRepository.findEntityById(postId);

    Comment comment = save(new Comment(text, post, user, commentLikes));
    post.getComments().add(comment);
    user.getComments().add(comment);

    postRepository.save(post);
    userRepository.save(user);

    notificationService.createNotificationComment(post.getId(), post.getUser().getId());

    return comment;
  }

  public Comment toggleCommentLike(Long commentId) {
    Comment comment = findEntityById(commentId);
    List<CommentLike> commentLikes = comment.getCommentLikes();
    Boolean commentIsLiked = commentLikes.stream().anyMatch(cl -> Objects.equals(cl.getUser().getId(), activeUserId()));

    if (commentIsLiked) {
      comment.getCommentLikes().removeIf(cl -> Objects.equals(cl.getUser().getId(), activeUserId()));
      return save(comment);
    } else {
      User user = userRepository.findEntityById(activeUserId());
      CommentLike commentLike = new CommentLike(user, comment);
      comment.getCommentLikes().add(commentLike);
      return save(comment);
    }
  }

  public Page<Comment> getCommentsForPostPaginated(Long postId, Integer pageNumber, Integer pageSize) {
    PageRequest pageRequest = PageRequest.of(pageNumber, pageSize, Sort.Direction.ASC, "createdDate");
    return commentRepository.findCommentsByPostId(postId, pageRequest);
  }

}
