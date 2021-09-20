package com.danit.fs12.utils;

import com.danit.fs12.security.AuthUserDetails;
import org.springframework.security.core.context.SecurityContextHolder;

public class ActiveUserUtils{

  public static Long getActiveUserId() {
    AuthUserDetails authUserDetails = (AuthUserDetails) SecurityContextHolder.getContext()
      .getAuthentication().getPrincipal();
    return authUserDetails.getActiveUserId();
  }
}
