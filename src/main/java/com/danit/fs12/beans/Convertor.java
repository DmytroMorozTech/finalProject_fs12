package com.danit.fs12.beans;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;


/**
 * If we give correct names to our fields - we may not use explicit mapping.
 * ModelMapper will apply implicit mapping "under the hood".
 */
@Component
public class Convertor {

  @Bean
  public ModelMapper createModelMapper() {
    ModelMapper mm = new ModelMapper();

    return mm;
  }
}
