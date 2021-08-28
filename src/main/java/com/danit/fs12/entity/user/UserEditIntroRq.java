package com.danit.fs12.entity.user;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class UserEditIntroRq {

  @NotNull(message = "First name can not be null")
  @Size(min = 2, message = "User first name must have more than 2 characters!")
  private String firstName;

  @NotNull(message = "Last name can not be null")
  @Size(min = 2, message = "User last name must have more than 2 characters!")
  private String lastName;

  private String headline;

  private String country;

  private String city;
}
