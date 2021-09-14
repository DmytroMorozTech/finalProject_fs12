package com.danit.fs12.service;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.commentlike.CommentLike;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.postlike.PostLike;
import com.danit.fs12.entity.user.Provider;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserEditIntroRq;
import com.danit.fs12.exception.AuthenticationException;
import com.danit.fs12.exception.ForbiddenException;
import com.danit.fs12.exception.NoSuchUserException;
import com.danit.fs12.exception.SecurityCodesDoNotMatchException;
import com.danit.fs12.exception.UserAlreadyExistException;
import com.danit.fs12.repository.CommentRepository;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
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
  private final JavaMailSender mailSender;

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

  public User registerUser(String firstName,
                           String lastName,
                           String password,
                           String email) {
    if (userRepository.findUserByEmail(email) != null && userRepository.findUserByEmail(email).getPasswordHash() != null) {
      throw new UserAlreadyExistException(String.format("User with email %s already exists", email));
    } else {
      User user = new User();
      user.setFirstName(firstName);
      user.setLastName(lastName);
      user.setPasswordHash(password);
      user.setEmail(email.toLowerCase());
      user.setProvider(Provider.LOCAL);
      saveUser(user);
      return user;
    }
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

  public void processOAuthPostLogin(String email,
                                    String avatarUrl,
                                    String firstName,
                                    String lastName) {
    User existUser = userRepository.findUserByEmail(email);

    if (existUser == null) {
      User newUser = new User();
      newUser.setEmail(email);
      newUser.setAvatarPublicId(avatarUrl);
      newUser.setFirstName(firstName);
      newUser.setLastName(lastName);
      newUser.setProvider(Provider.GOOGLE);
      userRepository.save(newUser);
    }
  }

  public User updateUser(String password, String email) {
    if (userRepository.findUserByEmail(email) != null && userRepository.findUserByEmail(email).getPasswordHash() != null) {
      throw new UserAlreadyExistException(String.format("User with email %s already exists", email));
    } else {
      User user = userRepository.findUserByEmail(email);
      user.setPasswordHash(password);
      saveUser(user);
      return user;
    }
  }

  public void sendEmail(String receiverEmail, Integer resetNumber, String userName) throws MessagingException, UnsupportedEncodingException {
    MimeMessage message = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message);

    helper.setFrom("linkedin.dan.it@gmail.com", "LinkedIn");
    helper.setTo(receiverEmail);

    String subject = userName + ", this message contains code to Sign in.";

    String content = "<p>Hello, " + userName + ",</p>" +
      "<p>We have received your request to change your LinkedIn profile password.</p>" +
      "<p>" + resetNumber + "</p>" +
      "<p>Please, enter this number to finish password changing process.</p>";

    helper.setSubject(subject);
    helper.setText(content, true);
    mailSender.send(message);
  }

  public void generateResetPasswordNumber(String email) throws MessagingException, UnsupportedEncodingException {
    int resetNumber = (int) (Math.random() * 1000000);
    Optional<User> userOpt = Optional.of(userRepository.findUserByEmail(email));
    if (userOpt.isPresent()) {
      PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
      User user = userOpt.get();
      String userName = user.getFirstName();
      user.setResetPasswordNumber(passwordEncoder.encode(String.valueOf(resetNumber)));
      userRepository.save(user);
      sendEmail(email, resetNumber, userName);
    } else {
      throw new NoSuchUserException(String.format("Could not find any user with %s email", email));
    }
  }

  public boolean isUserRecognized(String email, String code) {
    User user = findByEmail(email);
    if (user != null) {
      if (passwordEncoder.matches(code, user.getResetPasswordNumber())) {
        return true;
      } else {
        throw new SecurityCodesDoNotMatchException("Entered security code is incorrect!");
      }
    } else {
      throw new NoSuchUserException(String.format("User with email %s doesn't exist", email));
    }
  }

  public void updateUserPassword(String email, String newPassword) {
    User user = findByEmail(email);
    if (user != null) {
      BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
      String encodedPassword = passwordEncoder.encode(newPassword);
      user.setPasswordHash(encodedPassword);
      user.setResetPasswordNumber(null);
      userRepository.save(user);
    } else {
      throw new NoSuchUserException(String.format("User with email %s doesn't exist", email));
    }
  }
}