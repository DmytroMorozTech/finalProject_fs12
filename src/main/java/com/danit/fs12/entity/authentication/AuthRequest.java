package com.danit.fs12.entity.authentication;

import lombok.Data;

@Data
public class AuthRequest {
  private String firstName;
  private String lastName;
  private String email;
  private String passwordHash;
}
