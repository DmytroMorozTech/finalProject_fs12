package com.danit.fs12;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@SpringBootApplication
public class Application {

  @PostConstruct
  public void init() {
    TimeZone.setDefault(TimeZone.getTimeZone("Europe/Kiev"));
  }

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

}
