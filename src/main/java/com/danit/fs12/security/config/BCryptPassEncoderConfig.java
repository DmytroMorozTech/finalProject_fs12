package com.danit.fs12.security.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class BCryptPassEncoderConfig {

  @Bean
  public BCryptPasswordEncoder bCrypt() {
    return new BCryptPasswordEncoder();
  }
}
