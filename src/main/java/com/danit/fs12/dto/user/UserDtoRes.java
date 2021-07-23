package com.danit.fs12.dto.user;

import lombok.Data;

@Data
public class UserDtoRes {

  private Long id;
  private String firstName;
  private String lastName;
  private String email;
  private String cell;
  private String age;
  private String login;

}
