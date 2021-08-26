package com.danit.fs12.service;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.commentLike.CommentLike;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.postLike.PostLike;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.ForbiddenException;
import com.danit.fs12.repository.CommentRepository;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService extends GeneralService<User> {
  private final PostRepository postRepository;
  private final UserRepository userRepository;
  private final CommentRepository commentRepository;
  private final PasswordEncoder passwordEncoder;

  public List<User> findUsersWhoLikedPost(Long id) {
    Post post = postRepository.findEntityById(id);
    List<PostLike> postLikes = post.getPostLikes();
    List<User> usersList = postLikes.stream().map(PostLike::getUser).collect(Collectors.toList());
    return usersList;
  }

  public List<User> findUsersWhoLikedComment(Long id) {
    Comment comment = commentRepository.findEntityById(id);
    List<CommentLike> commentLikes = comment.getCommentLikes();
    List<User> usersList = commentLikes.stream().map(CommentLike::getUser).collect(Collectors.toList());
    return usersList;
  }

  public User findUserById(Long id) {
    return findEntityById(id);
  }

  public User saveUser(User user) {
    user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));
    return userRepository.save(user);
  }

  public User findByEmail(String email) {
    return userRepository.findUserByEmail(email);
  }

  public User findByEmailAndPassword(String email, String password) {
    User user = findByEmail(email);
    if (user != null) {
      if (passwordEncoder.matches(password, user.getPasswordHash())) {
        return user;
      }
    }
    throw new ForbiddenException("Access denied. Wrong username or password were sent in the request.");
  }

  public User getActiveUser() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    return findByEmail(authentication.getName());
  }

  public void registerUser(String firstName,
                           String lastName,
                           Integer age,
                           String phoneNumber,
                           String password,
                           String email,
                           String avatar) {
    User user = new User();
    user.setFirstName(firstName);
    user.setLastName(lastName);
    user.setAge(age);
    user.setPhoneNumber(phoneNumber);
    user.setPasswordHash(password);
    user.setEmail(email);
    user.setAvatarUrl(avatar);
    saveUser(user);
  }
}
