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
import java.util.List;

@Entity(name = "User")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "user")
public class User extends AbstractEntity {

  @Column(name = "id")
  private long id;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @Column(name = "email")
  private String email;

  @Column(name = "cell")
  private String cell;

  @Column(name = "age")
  private Integer age;

  @Column(name = "login")
  private String login;

  @Column(name = "password")
  private String password;

  @OneToMany(
      mappedBy = "user",
      cascade = CascadeType.ALL)
  private List<Message> messages = new ArrayList<>();

}
