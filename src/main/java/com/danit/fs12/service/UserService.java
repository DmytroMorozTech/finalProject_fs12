package com.danit.fs12.service;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.commentlike.CommentLike;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.postlike.PostLike;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserEditIntroRq;
import com.danit.fs12.exception.AuthenticationException;
import com.danit.fs12.exception.ForbiddenException;
import com.danit.fs12.exception.NoSuchUserException;
import com.danit.fs12.repository.CommentRepository;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
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
    Authentication authentication = Optional.ofNullable(SecurityContextHolder.getContext().getAuthentication())
      .orElseThrow(() -> new AuthenticationException("Impossible to get authentication context."));
    return Optional.ofNullable(findByEmail(authentication.getName())).orElseThrow(() ->
      new NoSuchUserException("There is a problem while trying to get Active user. Check your authentication data."));
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
    user.setAvatarPublicId(avatar);
    saveUser(user);
  }

  public User updateIntro(UserEditIntroRq rq) {
    User activeUser = findEntityById(getActiveUser().getId());
    activeUser.setFirstName(rq.getFirstName());
    activeUser.setLastName(rq.getLastName());
    activeUser.setCountry(rq.getCountry());
    activeUser.setCity(rq.getCity());
    activeUser.setHeadline(rq.getHeadline());

    return save(activeUser);
  }
}