package com.danit.fs12.entity.workplace;

import com.danit.fs12.controller.UserViews;
import com.danit.fs12.entity.organization.OrganizationRs;
import com.danit.fs12.entity.user.UserRs;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDate;

@Data
public class WorkPlaceRs {
  @JsonView(UserViews.Profile.class)
  private Long id;

  @JsonView(UserViews.Profile.class)
  private String position;

  @JsonView(UserViews.Profile.class)
  private String responsibilities;

  @JsonView(UserViews.Profile.class)
  private LocalDate dateStart;

  @JsonView(UserViews.Profile.class)
  private LocalDate dateFinish;

  @JsonView(UserViews.Profile.class)
  private Boolean isCurrentlyEmployed;

  private UserRs userRs;

  @JsonView(UserViews.Profile.class)
  private OrganizationRs organization;
}
