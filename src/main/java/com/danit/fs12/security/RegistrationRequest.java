package com.danit.fs12.security;

import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class RegistrationRequest {

  @NotEmpty
  private String firstName;

  @NotEmpty
  private String lastName;

  @NotEmpty
  private String email;

  @NotEmpty
  private String password;

}