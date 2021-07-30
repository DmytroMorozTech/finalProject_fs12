package com.danit.fs12.utils;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class Convertor {

  @Bean
  public ModelMapper createModelMapper() {
    return new ModelMapper();
  }
}
