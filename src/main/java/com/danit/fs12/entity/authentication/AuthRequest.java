package com.danit.fs12.entity.authentication;

import lombok.Data;

@Data
public class AuthRequest {

  private String login;
  private String password;
}
