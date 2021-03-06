package com.danit.fs12.facade;

import com.danit.fs12.entity.restore.RestoreRequest;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserEditIntroRq;
import com.danit.fs12.entity.user.UserRq;
import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.security.UpdatePasswordRequest;
import com.danit.fs12.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class UserFacade extends GeneralFacade<User, UserRq, UserRs> {
  private final UserService userService;

  public List<UserRs> findUsersWhoLikedPost(Long id) {
    List<User> listUsers = userService.findUsersWhoLikedPost(id);

    List<UserRs> listUsersRs = listUsers.stream()
      .map(this::convertToDto).collect(Collectors.toList());

    return listUsersRs;
  }

  public List<UserRs> findUsersWhoLikedComment(Long id) {
    List<User> listUsers = userService.findUsersWhoLikedComment(id);

    List<UserRs> listUsersRs = listUsers.stream()
      .map(this::convertToDto).collect(Collectors.toList());

    return listUsersRs;
  }

  public UserRs getActiveUser() {
    User user = userService.getActiveUser();
    return convertToDto(user);
  }

  public UserRs findByEmailAndPassword(String email, String password) {
    User user = userService.findByEmailAndPassword(email, password);
    return convertToDto(user);
  }

  public void registerUser(String firstName, String lastName, String password, String email) {
    userService.registerUser(firstName, lastName, password, email);
  }

  public UserRs updateIntro(UserEditIntroRq rq) {
    User updateIntro = userService.updateIntro(rq);
    return convertToDto(updateIntro);
  }

  public UserRs updateUserPassword(UpdatePasswordRequest updatePasswordRequest) {
    return convertToDto(userService.updateUser(updatePasswordRequest.getPassword(),
      updatePasswordRequest.getEmail()));
  }

  public void generateResetPasswordNumber(RestoreRequest restoreRequest)
    throws MessagingException, UnsupportedEncodingException {
    userService.generateResetPasswordNumber(restoreRequest.getEmail());
  }

  public boolean isUserRecognized(RestoreRequest restoreRequest) {
    return userService.isUserRecognized(restoreRequest.getEmail(), restoreRequest.getCode());
  }

  public void restoreUserPassword(RestoreRequest restoreRequest) {
    userService.updateUserPassword(restoreRequest.getEmail(), restoreRequest.getPassword());
  }

  public List<UserRs> findUsersByName(String searchInput) {
    Set<User> foundUsers = userService.findUsersByName(searchInput);
    List<UserRs> userRsList = foundUsers
      .stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());
    return userRsList;
  }

  public List<UserRs> findConnectedUsersByName(String searchInput) {
    Set<User> foundUsers = userService.findConnectedUsersByName(searchInput);
    List<UserRs> userRsList = foundUsers
      .stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());
    return userRsList;
  }

  public List<UserRs> findConnectedUsers() {
    List<User> connectedUsers = userService.findConnectedUsers();
    return connectedUsers
      .stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());
  }

  public List<UserRs> getMutualConnections(Long activeUserId, Long userWhomId) {
    List<User> mutualConnections = userService.getMutualConnections(activeUserId, userWhomId);
    return mutualConnections.stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());
  }

  public UserRs toggleFollowUser(Long userId) {
    User user = userService.toggleFollowUser(userId);
    return convertToDto(user);
  }

  public Set<UserRs> getUsersFollowed() {
    Set<User> followedUsers = userService.getUsersFollowed();
    return followedUsers.stream()
      .map(this::convertToDto)
      .collect(Collectors.toSet());
  }

  public Set<UserRs> getUsersFollowing() {
    Set<User> followingUsers = userService.getUsersFollowing();
    return followingUsers.stream()
      .map(this::convertToDto)
      .collect(Collectors.toSet());
  }

  public Set<UserRs> getPotentialContacts() {
    Set<User> followingUsers = userService.getPotentialContacts();
    return followingUsers.stream()
      .map(this::convertToDto)
      .collect(Collectors.toSet());
  }
}
