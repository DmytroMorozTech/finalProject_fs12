package com.danit.fs12.entity.authentication;

import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserRs;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthResponse {

  private String token;
}
