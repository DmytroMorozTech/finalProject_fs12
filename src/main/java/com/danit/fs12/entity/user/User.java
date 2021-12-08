package com.danit.fs12.entity.user;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.bookmark.Bookmark;
import com.danit.fs12.entity.certification.Certification;
import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.commentlike.CommentLike;
import com.danit.fs12.entity.connection.Connection;
import com.danit.fs12.entity.education.Education;
import com.danit.fs12.entity.group.Group;
import com.danit.fs12.entity.invitation.Invitation;
import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.postlike.PostLike;
import com.danit.fs12.entity.workplace.WorkPlace;
import com.danit.fs12.utils.ActiveUserUtils;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Entity(name = "User")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "users")
@Builder
public class User extends AbstractEntity {

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "headline")
  private String headline;

  @Column(name = "country")
  private String country;

  @Column(name = "city")
  private String city;

  @Column(name = "phone_number")
  private String phoneNumber;

  private String email;

  private Integer age;

  @Column(name = "password_hash")
  private String passwordHash;

  @Column(name = "avatar_public_id")
  private String avatarPublicId;

  @Column(name = "profile_bg_public_id")
  private String profileBgPublicId;

  @Column(name = "reset_password_code")
  private String resetPasswordNumber;

  @Enumerated(EnumType.STRING)
  private Provider provider;

  @OneToMany(mappedBy = "user", cascade = {CascadeType.ALL})
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Post> posts = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Comment> comments = new ArrayList<>();

  @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.REMOVE}, mappedBy = "user")
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Message> messages = new ArrayList<>();

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(
    name = "users_chats",
    joinColumns = @JoinColumn(
      name = "user_id",
      foreignKey = @ForeignKey(name = "users_chats_user_id_fk")
    ),
    inverseJoinColumns = @JoinColumn(
      name = "chat_id",
      foreignKey = @ForeignKey(name = "users_chats_chat_id_fk")
    ))
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Chat> chats = new ArrayList<>();

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(
    name = "user_has_groups",
    joinColumns = @JoinColumn(
      name = "user_id",
      foreignKey = @ForeignKey(name = "user_has_groups_user_id_fk")
    ),
    inverseJoinColumns = @JoinColumn(
      name = "group_id",
      foreignKey = @ForeignKey(name = "user_has_groups_group_id_fk")
    ))
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Group> groups = new ArrayList<>();

  @OneToMany
  @JoinTable(name = "followers",
    joinColumns = @JoinColumn(name = "userWhoId"),
    inverseJoinColumns = @JoinColumn(name = "userWhomId"))
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private Set<User> usersFollowed; // users that current User follows

  @OneToMany
  @JoinTable(name = "followers",
    joinColumns = @JoinColumn(name = "userWhomId"),
    inverseJoinColumns = @JoinColumn(name = "userWhoId"))
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private Set<User> usersFollowing; // users that are following the current User

  //  @OneToMany(
  //    mappedBy = "user",
  //    cascade = CascadeType.ALL)
  //  @ToString.Exclude
  //  @EqualsAndHashCode.Exclude
  //  @JsonIgnore
  //  private List<Organization> organizationsFollowed = new ArrayList<>();

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(
    name = "invitations",
    joinColumns = @JoinColumn(
      name = "user_who_id",
      foreignKey = @ForeignKey(name = "invitations_user_who_id_fk")
    ),
    inverseJoinColumns = @JoinColumn(
      name = "user_whom_id",
      foreignKey = @ForeignKey(name = "invitations_user_whom_id_fk")
    ))
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Invitation> invitations = new ArrayList<>();

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(
    name = "connections",
    joinColumns = @JoinColumn(
      name = "user_who_id",
      foreignKey = @ForeignKey(name = "connections_user_who_id_fk")
    ),
    inverseJoinColumns = @JoinColumn(
      name = "user_whom_id",
      foreignKey = @ForeignKey(name = "connections_user_whom_id_fk")
    ))
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Connection> connections = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<WorkPlace> workPlaces = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<CommentLike> commentLikes = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<PostLike> postLikes = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Bookmark> bookmarks = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Education> educations = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Certification> certifications = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Notification> notifications = new ArrayList<>();

  public Message addMessage(Message message) {
    if (!this.messages.contains(message)) {
      this.messages.add(message);
      message.setUser(this);
    }
    return message;
  }

  public Chat addChat(Chat chat) {
    if (!this.chats.contains(chat)) {
      this.chats.add(chat);
      chat.getUsers().add(this);
    }
    return chat;
  }

  public String getFullName() {
    return firstName + " " + lastName;
  }

  public String getPositionAndCompany() {
    Optional<WorkPlace> workPlaceOpt = workPlaces
      .stream()
      .filter(wp -> wp.getDateFinish() == null)
      .findFirst();

    return workPlaceOpt.isPresent()
      ? workPlaceOpt.get().getPositionAndCompany()
      : "";
  }

  public Boolean getIsFollowedByActiveUser() {
    String activeUserEmail = ActiveUserUtils.getActiveUserEmail();
    Set<User> usersFollowing = getUsersFollowing();

    return (usersFollowing.size() == 0)
      ? false
      : getUsersFollowing().stream().anyMatch(user -> Objects.equals(user.getEmail(), activeUserEmail));
  }

  public Integer getNumberOfFollowers() {
    return getUsersFollowing().size();
  }
}
