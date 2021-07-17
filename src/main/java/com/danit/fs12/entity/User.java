package com.danit.fs12.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

  public User(String firstName, String lastName, String email, String cell, Integer age, String login, String password) {
    super();
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
      cascade = CascadeType.ALL)
  private List<Post> posts = new ArrayList<>();

}
