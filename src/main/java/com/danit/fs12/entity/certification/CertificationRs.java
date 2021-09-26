package com.danit.fs12.entity.certification;

import com.danit.fs12.controller.views.UserViews;
import com.danit.fs12.entity.user.UserRs;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CertificationRs {

  @JsonView(UserViews.Profile.class)
  private Long id;

  @JsonView(UserViews.Profile.class)
  private String name;

  @JsonView(UserViews.Profile.class)
  private String issuingOrganization;

  @JsonView(UserViews.Profile.class)
  private Boolean hasExpiryDate;

  @JsonView(UserViews.Profile.class)
  private LocalDate issueDate;

  @JsonView(UserViews.Profile.class)
  private LocalDate expirationDate;

  @JsonView(UserViews.Profile.class)
  private String credentialId;

  @JsonView(UserViews.Profile.class)
  private String credentialUrl;

}
