package com.danit.fs12.utils;

import com.danit.fs12.security.AuthUserDetails;
import org.springframework.security.core.context.SecurityContextHolder;

public class ActiveUserUtils {

  public static Long getActiveUserId() {
    try {
      AuthUserDetails authUserDetails = (AuthUserDetails) SecurityContextHolder.getContext()
        .getAuthentication().getPrincipal();
      return authUserDetails.getActiveUserId();
    } catch (ClassCastException ex) {
      System.out.println(ex);
      // TODO: How should we manage this situation correctly?
      // When user has entered his credentials while signing in
      // there is a small time interval of several seconds when we still can not access AuthUserDetails
      // from SecurityContextHolder. But ActiveUserUtils is accessed straight away by Post entity
      // in method getIsLikedByActiveUser.
    }
    return null;
  }
}