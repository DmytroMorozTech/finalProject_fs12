package com.danit.fs12.entity.certification;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

public class CertificationRq {

  @NotNull(message = "Certificate name should be specified.")
  private String name;

  @NotNull(message = "Certificate issuing organization should be specified.")
  private String issuingOrganization;

  @NotNull(message = "Specify if certificate has date of expire.")
  private Boolean hasExpiryDate;

  @NotNull(message = "Certificate date of issue should be specified.")
  private LocalDate issueDate;

  @NotNull(message = "Certificate date of expire should be specified.")
  private LocalDate expirationDate;

  @NotNull(message = "Certificate credential id should be specified.")
  private String credentialId;

  @NotNull(message = "Certificate credential url should be specified.")
  private String credentialUrl;
}
