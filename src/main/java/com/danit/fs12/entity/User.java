package com.danit.fs12.entity;

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
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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

  @OneToMany(
      mappedBy = "user",
      cascade = {CascadeType.ALL},
      fetch = FetchType.EAGER
      )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Post> posts = new ArrayList<>();

  @OneToMany(
      mappedBy = "user",
      cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Comment> comments = new ArrayList<>();

  //  ---------------------------------
  // new stuff related to user -> messages -> chats mapping
  @OneToMany(
      cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
      mappedBy = "user"
      )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Message> messages = new ArrayList<>();

  //  ---------------------------------
  @ManyToMany
  @JoinTable(name = "followers",
      joinColumns = @JoinColumn(name = "userId"),
      inverseJoinColumns = @JoinColumn(name = "followedUserId")
      )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private Set<User> usersFollowed; // users that current User follows

  @ManyToMany
  @JoinTable(name = "followers",
      joinColumns = @JoinColumn(name = "followedUserId"),
      inverseJoinColumns = @JoinColumn(name = "userId")
      )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private Set<User> usersFollowing; // users that are following the current User
  //  ---------------------------------

  @JsonIgnore
  @ManyToOne(
      cascade = {CascadeType.PERSIST}
      )
  @JoinTable(
      name = "rel_organization_users",
      joinColumns = {
          @JoinColumn(
              name = "organization_id",
              referencedColumnName = "id")
      },
      inverseJoinColumns = {
          @JoinColumn(name = "user_id",
              referencedColumnName = "id")
      }
      )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private Organization organization;
  // this is the organization that User is currently working at.
  //  ---------------------------------


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

  public void addMessage(Message message) {
    if (!messages.contains(message)) {
      messages.add(message);
    }
  }

  public void removeMessage(Message message) {
    messages.remove(message);
  }


}




