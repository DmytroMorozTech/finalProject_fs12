package com.danit.fs12.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
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

  @Column(name = "phone_number")
  private String phoneNumber;

  private String email;
  private Integer age;
  private String login;
  private String password;

  @OneToMany(mappedBy = "user", cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Post> posts = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Comment> comments = new ArrayList<>();


  @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.REMOVE}, mappedBy = "user")
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
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
  private List<Group> groups = new ArrayList<>();


  @ManyToMany
  @JoinTable(name = "followers",
    joinColumns = @JoinColumn(name = "userId"),
    inverseJoinColumns = @JoinColumn(name = "followedUserId"))
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private Set<User> usersFollowed; // users that current User follows


  @ManyToMany
  @JoinTable(name = "followers",
    joinColumns = @JoinColumn(name = "followedUserId"),
    inverseJoinColumns = @JoinColumn(name = "userId"))
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private Set<User> usersFollowing; // users that are following the current User

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<WorkPlace> workPlaces = new ArrayList<>();


  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Like> likes = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Education> educations = new ArrayList<>();

  @OneToMany(
    mappedBy = "user",
    cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Certification> certifications = new ArrayList<>();


  // these methods below should be moved to service
  public void addPost(Post post) {
    if (!this.posts.contains(post)) {
      this.posts.add(post);
      post.setUser(this);
    }
  }

  public Comment addComment(Comment comment) {
    if (!this.comments.contains(comment)) {
      this.comments.add(comment);
      comment.setUser(this);
    }
    return comment;
  }

  public Message addMessage(Message message){
    if (!this.messages.contains(message)) {
      this.messages.add(message);
      message.setUser(this);
    }
    return message;
  }


}




