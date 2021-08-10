package com.danit.fs12.entity.organization;

import javax.validation.constraints.NotNull;

public class OrganizationRq {

  @NotNull(message = "Organization name should be specified.")
  private String name;

  @NotNull(message = "Organization location should be specified.")
  private String location;

  @NotNull(message = "Organization email should be specified.")
  private String email;

  @NotNull(message = "Organization industry should be specified.")
  private String industry;

  @NotNull(message = "Organization specialities should be specified.")
  private String specialities;

  @NotNull(message = "Organization website should be specified.")
  private String webSite;

  @NotNull(message = "Organization year of found should be specified.")
  private Integer foundedInYear;

  @NotNull(message = "Number of employees id should be specified.")
  private Integer numberOfEmployees;

  @NotNull(message = "Organization phone number should be specified.")
  private String phoneNumber;
}
