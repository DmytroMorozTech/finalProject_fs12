package com.danit.fs12.entity.user;

import com.danit.fs12.controller.UserViews;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserRs {

  @JsonView(UserViews.Base.class)
  private Long id;

  @JsonView(UserViews.Base.class)
  private LocalDateTime createdDate;

  private LocalDateTime lastModifiedDate;

  private String firstName;

  private String lastName;

  @JsonView(UserViews.Base.class)
  private String fullName;

  @JsonView(UserViews.Base.class)
  private String avatarUrl;

  @JsonView(UserViews.Base.class)
  private String positionAndCompany;

  @JsonView(UserViews.External.class)
  private String phoneNumber;

  @JsonView(UserViews.External.class)
  private String age;

  @JsonView(UserViews.External.class)
  private String email;

  @JsonView(UserViews.WithPasswordHash.class)
  private String passwordHash;

}
