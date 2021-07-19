package com.danit.fs12.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity(name = "User")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "users")
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

  public User(String firstName,
              String lastName,
              String email,
              String cell,
              Integer age,
              String login,
              String password) {
//    super(); // not needed
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.cell = cell;
    this.age = age;
    this.login = login;
    this.password = password;
  }

  @OneToMany(
      mappedBy = "user",
      cascade = {CascadeType.ALL},
      fetch = FetchType.EAGER
  )
  private List<Post> posts = new ArrayList<>();

  @OneToMany(
      mappedBy = "user",
      cascade = {CascadeType.ALL}
  )
  private List<Connection> connections = new ArrayList<>();

  @OneToMany(
      mappedBy = "user",
      cascade = CascadeType.ALL)
  private List<Comment> comments = new ArrayList<>();


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

  public void addConnection(Long connectedUserId) {
    List<Long> idsOfConnectedUsers =
        this.connections
            .stream()
            .map(c -> c.getConnectedUserId())
            .collect(Collectors.toList());
    if (!idsOfConnectedUsers.contains(connectedUserId)) {
      Connection connection = new Connection(this, connectedUserId);
      connection.setUser(this);
      this.connections.add(connection);
    }
  }

  @Override
  public String toString() {
    return "User{" +
        "firstName='" + firstName + '\'' +
        ", lastName='" + lastName + '\'' +
        ", email='" + email + '\'' +
        ", cell='" + cell + '\'' +
        ", age=" + age +
        ", login='" + login + '\'' +
        '}';
  }
}
