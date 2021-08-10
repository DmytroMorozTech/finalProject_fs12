package com.danit.fs12.entity.certification;

import com.danit.fs12.entity.user.UserRs;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CertificationRs {

  private String id;
  private String name;
  private String issuingOrganization;
  private Boolean hasExpiryDate;
  private LocalDate issueDate;
  private LocalDate expirationDate;
  private String credentialId;
  private String credentialUrl;
  private UserRs userRs;
}
