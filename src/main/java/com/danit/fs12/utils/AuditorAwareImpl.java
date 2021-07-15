package com.danit.fs12.utils;

import org.springframework.data.domain.AuditorAware;

import java.util.Optional;

public class AuditorAwareImpl implements AuditorAware<String> {

  @Override
  public Optional<String> getCurrentAuditor() {
    return Optional.of("currentUser");
         /*
          if you are using spring security, you can get
          the currently logged username with following code segment.
          SecurityContextHolder.getContext().getAuthentication().getName()
         */
  }
}
