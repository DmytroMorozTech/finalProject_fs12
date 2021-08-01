package com.danit.fs12.entity.user;

import lombok.Data;

@Data
public class UserRs {

  private Long id;
  private String fullName;
  private String email;
  private String phoneNumber;
  private String age;
  private String avatarUrl;
  private String positionAndCompany;
}
