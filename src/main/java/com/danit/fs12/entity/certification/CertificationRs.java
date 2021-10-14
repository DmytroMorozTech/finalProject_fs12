package com.danit.fs12.entity.certification;

import com.danit.fs12.controller.views.UserViews;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDate;

@Data
@JsonView(UserViews.Profile.class)
public class CertificationRs {

  private Long id;

  private String name;

  private String issuingOrganization;

  private Boolean hasExpiryDate;

  private LocalDate issueDate;

  private LocalDate expirationDate;

  private String credentialId;

  private String credentialUrl;

}
