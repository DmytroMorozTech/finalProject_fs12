package com.danit.fs12.security;

import com.danit.fs12.entity.user.User;
import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthUserDetailsService implements UserDetailsService {

  private final UserService userService;

  @Override
  public AuthUserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    User user = userService.findByEmail(email);
    return AuthUserDetails.fromUserEntityToAuthUserDetails(user);
  }
}
