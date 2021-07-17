package com.danit.fs12.dto;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class UserDtoReq {

  @NotNull(message = "First name can not be null")
  @Size(min = 2, message = "User first name must have more than 2 characters!")
  private String firstName;

  @NotNull(message = "Last name can not be null")
  @Size(min = 2, message = "User last name must have more than 2 characters!")
  private String lastName;

  @Email(message = "Invalid email address!")
  private String email;

  //  @Pattern(regexp = "^(\\+\\d{1,3}( )?)?\\d{11}$", message = "Invalid cell number. Cell number should start with '+'! ")
  private String cell;

  @Min(value = 18, message = "Age should not be less than 18")
  @Max(value = 150, message = "Age should not be greater than 150")
  private Integer age;

  @NotNull(message = "User login can not be null")
  @Size(min = 2, message = "User login must have more than 2 characters!")
  private String login;

  private String password;
}
