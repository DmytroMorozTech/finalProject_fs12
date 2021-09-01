package com.danit.fs12.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class CloudinaryConfig {

  @Bean
  public Cloudinary getCloudinary() {
    Map config = ObjectUtils.asMap(
      "cloud_name", "dan-insta-step",
      "api_key", "615942255258686",
      "api_secret", "HnYwqnw7fBFrk9yn16CLt7r_s-I");
    return new Cloudinary(config);
  }
  //TODO: move to application.properties ! all values
  // Separate cloudinaryService with methods Upload, Delete, Update

}
