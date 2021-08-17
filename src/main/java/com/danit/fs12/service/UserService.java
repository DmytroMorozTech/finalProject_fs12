package com.danit.fs12.service;

import com.danit.fs12.entity.like.Like;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
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
  private final PasswordEncoder passwordEncoder;

  public User getActiveUser(Long id) {

    //temporary to test
    User user = User.builder()
      .firstName("firstName")
      .lastName("lastName")
      .email("email")
      .phoneNumber("+380503332211")
      .age(30)
      .passwordHash("userPassHash")
      .build();

    return user;
  }

  public void followUser(Long userId, Long followedUserId) {
    User user = findEntityById(userId);
    User followedUser = findEntityById(followedUserId);

    user.getUsersFollowed().add(followedUser);
    save(user);
  }

  //    user.addConnection(userBeingFollowed);
  //    // ее должен являться методом сущности! Вынести в СЕРВИС!


  //  public void addConnection(User userBeingFollowed) {
  //    List<Long> idsOfFollowedUsers =
  //        this.connections
  //            .stream()
  //            .map(c -> c.getUserBeingFollowed().getId())
  //            .collect(Collectors.toList());
  //    if (!idsOfFollowedUsers.contains(userBeingFollowed.getId())) {
  //      Connection connection = new Connection(this, userBeingFollowed);
  //      connection.setUser(this);
  //      connection.setUserBeingFollowed(userBeingFollowed);
  //      this.connections.add(connection);
  //    }
  //  }

  public List<User> findUsersWhoLikedPost(Long id) {
    Post post = postRepository.findEntityById(id);
    List<Like> likes = post.getLikes();
    List<User> usersList = likes.stream().map(Like::getUser).collect(Collectors.toList());
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
    return null;
  }

  public User getActiveUser() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    return findByEmail(authentication.getName());
  }

  public void registerUser(String firstName, String lastName, Integer age, String phoneNumber, String password, String email, String avatar) {
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
