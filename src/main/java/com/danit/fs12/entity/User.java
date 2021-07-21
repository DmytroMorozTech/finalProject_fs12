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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

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

  private String email;
  private String cell;
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

// should be deleted
//  @OneToMany(
//      mappedBy = "user",
//      cascade = {CascadeType.ALL}
//  )
//  @ToString.Exclude
//  @EqualsAndHashCode.Exclude
//  private List<Connection> connections = new ArrayList<>();

  @OneToMany(
      mappedBy = "user",
      cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Comment> comments = new ArrayList<>();

  @OneToMany(
      mappedBy = "user",
      cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Message> messages = new ArrayList<>();

  //  ---------------------------------
  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(name = "tbl_followers",
      joinColumns = @JoinColumn(name = "userId"),
      inverseJoinColumns = @JoinColumn(name = "followedUserId")
  )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<User> usersFollowed;

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(name = "tbl_followers",
      joinColumns = @JoinColumn(name = "followedUserId"),
      inverseJoinColumns = @JoinColumn(name = "userId")
  )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<User> usersFollowing;
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


}




