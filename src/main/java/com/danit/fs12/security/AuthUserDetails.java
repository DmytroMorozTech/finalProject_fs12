package com.danit.fs12.security;

import com.danit.fs12.entity.user.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class AuthUserDetails implements UserDetails {

  private String login;
  private String password;
  private Long activeUserId;

  public static AuthUserDetails fromUserEntityToAuthUserDetails(User user) {
    AuthUserDetails a = new AuthUserDetails();
    a.login = user.getEmail();
    a.password = user.getPasswordHash();
    a.activeUserId = user.getId();
    return a;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return null;
  }

  @Override
  public String getPassword() {
    return password;
  }

  @Override
  public String getUsername() {
    return login;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  public Long getActiveUserId() {
    return activeUserId;
  }
}
