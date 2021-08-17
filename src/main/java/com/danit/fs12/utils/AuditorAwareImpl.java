package com.danit.fs12.utils;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

public class AuditorAwareImpl implements AuditorAware<String> {

  @Override
  public Optional<String> getCurrentAuditor() {
    return Optional.of(SecurityContextHolder.getContext().getAuthentication().getName());
         /*
          if you are using spring security, you can get
          the currently logged username with following code segment.
          SecurityContextHolder.getContext().getAuthentication().getName()
         */
  }
}
