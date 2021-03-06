package com.danit.fs12.service;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.commentlike.CommentLike;
import com.danit.fs12.entity.connection.Connection;
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
import com.danit.fs12.repository.ConnectionRepository;
import com.danit.fs12.repository.InvitationRepository;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import com.danit.fs12.utils.ForgotMailLetter;
import lombok.RequiredArgsConstructor;
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
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService extends GeneralService<User> {
  private final ConnectionRepository connectionRepository;
  private final PostRepository postRepository;
  private final UserRepository userRepository;
  private final CommentRepository commentRepository;
  private final PasswordEncoder passwordEncoder;
  private final JavaMailSender mailSender;
  private final InvitationRepository invitationRepository;

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

  public List<User> findConnectedUsers() {
    User activeUser = getActiveUser();
    Long activeUserId = activeUser.getId();
    List<Connection> connectionsOfActiveUser = connectionRepository
      .findConnectionsByUserWhoIdOrUserWhomId(activeUserId, activeUserId);

    List<Long> userIds = connectionsOfActiveUser.stream()
      .map(c -> c.getUserWho().getId().equals(activeUserId)
        ? c.getUserWhom().getId()
        : c.getUserWho().getId())
      .collect(Collectors.toList());

    return findAllById(userIds);
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

  public void registerUser(String firstName, String lastName, String password, String email) {
    if (userRepository.findUserByEmail(email) != null
      && userRepository.findUserByEmail(email).getPasswordHash() != null) {
      throw new UserAlreadyExistException(String.format("User with email %s already exists", email));
    } else {
      User user = new User();
      user.setFirstName(firstName);
      user.setLastName(lastName);
      user.setPasswordHash(password);
      user.setEmail(email.toLowerCase());
      user.setProvider(Provider.LOCAL);
      saveUser(user);
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

  public void sendEmail(String receiverEmail, Integer resetNumber, String userName)
    throws MessagingException, UnsupportedEncodingException {
    MimeMessage message = mailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message);

    helper.setFrom("linkedin.dan.it@gmail.com", "LinkedIn");
    helper.setTo(receiverEmail);

    String subject = userName + ", this message contains code to confirm password change.";

    helper.setSubject(subject);
    helper.setText(new ForgotMailLetter().buildEmail(resetNumber, userName), true);
    mailSender.send(message);
  }

  public void generateResetPasswordNumber(String email) throws MessagingException, UnsupportedEncodingException {
    Random random = new Random();
    int min = 100000;
    int max = 999999;
    int resetNumber = random.ints(min, (max + 1)).findFirst().getAsInt();
    if (userRepository.findUserByEmail(email) != null) {
      PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
      User user = userRepository.findUserByEmail(email);
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

  public Set<User> findUsersByName(String searchInput) {
    Long activeUserId = getActiveUser().getId();
    String[] searchWords = searchInput.trim().split(" ");

    if (searchWords.length == 1) {
      String searchWord = searchWords[0];
      List<User> usersList1 = userRepository.findUsersByFirstNameStartsWithIgnoreCase(searchWord);
      List<User> usersList2 = userRepository.findUsersByLastNameStartsWithIgnoreCase(searchWord);
      usersList1.addAll(usersList2);
      return usersList1.stream().filter(user -> !user.getId().equals(activeUserId)).collect(Collectors.toSet());
    }
    if (searchWords.length == 2) {
      List<User> usersList1 = userRepository.findUsersByFirstNameStartsWithIgnoreCase(searchWords[0]);
      List<User> filteredUsersList1 = usersList1.stream()
        .filter(user -> user.getLastName().toLowerCase().startsWith(searchWords[1].toLowerCase()))
        .collect(Collectors.toList());

      List<User> usersList2 = userRepository.findUsersByFirstNameStartsWithIgnoreCase(searchWords[1]);
      List<User> filteredUsersList2 = usersList2.stream()
        .filter(user -> user.getLastName().toLowerCase().startsWith(searchWords[0].toLowerCase()))
        .collect(Collectors.toList());

      filteredUsersList1.addAll(filteredUsersList2);
      return filteredUsersList1.stream().filter(user -> !user.getId().equals(activeUserId)).collect(Collectors.toSet());
    }

    return new HashSet<>();
  }

  public Set<User> findConnectedUsersByName(String searchInput) {
    String searchInputLowerCase = searchInput.toLowerCase();
    List<User> connectedUsers = findConnectedUsers();
    Set<User> foundConnectedUsersByName = connectedUsers.stream()
      .filter(user -> (user.getFirstName().toLowerCase().startsWith(searchInputLowerCase))
        || user.getLastName().toLowerCase().startsWith(searchInputLowerCase))
      .collect(Collectors.toSet());

    return foundConnectedUsersByName;
  }

  public List<User> getMutualConnections(Long activeUserId, Long userWhomId) {
    List<Connection> connectionsOfActiveUser = connectionRepository
      .findConnectionsByUserWhoIdOrUserWhomId(activeUserId, activeUserId);

    List<Long> activeUserFriendsIds = connectionsOfActiveUser.stream()
      .map(c -> c.getUserWho().getId().equals(activeUserId)
        ? c.getUserWhom().getId()
        : c.getUserWho().getId())
      .collect(Collectors.toList());

    List<Connection> connectionsOfUserWhom = connectionRepository
      .findConnectionsByUserWhoIdOrUserWhomId(userWhomId, userWhomId);

    List<Long> userWhomFriendsIds = connectionsOfUserWhom.stream()
      .map(c -> c.getUserWho().getId().equals(userWhomId)
        ? c.getUserWhom().getId()
        : c.getUserWho().getId())
      .collect(Collectors.toList());

    // now we should find intersection between these 2 collections
    List<Long> mutualConnectionsIds = activeUserFriendsIds.stream()
      .distinct()
      .filter(userWhomFriendsIds::contains)
      .collect(Collectors.toList());

    return findAllById(mutualConnectionsIds);
  }

  public User toggleFollowUser(Long userId) {
    User userForToggleFollow = findEntityById(userId);
    User activeUser = getActiveUser();
    boolean userIsFollowed = activeUser.getUsersFollowed().contains(userForToggleFollow);
    if (userIsFollowed) {
      activeUser.getUsersFollowed().remove(userForToggleFollow);
      save(activeUser);
      return userForToggleFollow;
    }
    getActiveUser().getUsersFollowed().add(userForToggleFollow);
    save(activeUser);
    return userForToggleFollow;
  }

  public Set<User> getUsersFollowed() {
    return getActiveUser().getUsersFollowed();
  }

  public Set<User> getUsersFollowing() {
    return getActiveUser().getUsersFollowing();
  }

  public Set<User> getPotentialContacts() {
    Set<User> mergedSet = new HashSet<>();
    mergedSet.addAll(getUsersFollowed());
    mergedSet.addAll(findConnectedUsers());
    mergedSet.addAll(getUsersWithPendingInvitationToAndFromActiveUser());
    mergedSet.add(getActiveUser());

    Set<User> potentialContacts = userRepository
      .findAll()
      .stream()
      .filter(user -> !mergedSet.contains(user))
      .collect(Collectors.toSet());

    return potentialContacts;

  }

  public List<User> getUsersWithPendingInvitationToAndFromActiveUser() {
    List<Long> idsOfUsersInvitationsForMe = invitationRepository.findInvitationsByUserWhomId(getActiveUser().getId())
      .stream().map(invitation -> invitation.getUserWho().getId()).collect(Collectors.toList());
    List<Long> idsOfUsersInvitationsFromMe = invitationRepository.findInvitationsByUserWhoId(getActiveUser().getId())
      .stream().map(invitation -> invitation.getUserWhom().getId()).collect(Collectors.toList());
    Set<Long> allUserIds = new HashSet<>();
    allUserIds.addAll(idsOfUsersInvitationsForMe);
    allUserIds.addAll(idsOfUsersInvitationsFromMe);
    return findAllById(allUserIds);
  }

}