package com.danit.fs12.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class CloudinaryConfig {

  @Value("${info.cloudinary.cloud-name}")
  private String cloudName;

  @Value("${info.cloudinary.api-key}")
  private String apiKey;

  @Value("${info.cloudinary.api-secret}")
  private String apiSecret;

  @Bean
  public Cloudinary getCloudinary() {
    Map config = ObjectUtils.asMap(
      "cloud_name", cloudName,
      "api_key", apiKey,
      "api_secret", apiSecret);
    return new Cloudinary(config);
  }

}
