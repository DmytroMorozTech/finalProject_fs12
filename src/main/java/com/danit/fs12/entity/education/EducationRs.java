package com.danit.fs12.entity.education;

import com.danit.fs12.controller.views.UserViews;
import com.danit.fs12.entity.user.UserRs;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDate;

@Data
public class EducationRs {

  @JsonView(UserViews.Profile.class)
  private Long id;

  @JsonView(UserViews.Profile.class)
  private String school;

  @JsonView(UserViews.Profile.class)
  private String degreeReceived;

  @JsonView(UserViews.Profile.class)
  private String activities;

  @JsonView(UserViews.Profile.class)
  private String description;

  @JsonView(UserViews.Profile.class)
  private String fieldOfStudy;

  @JsonView(UserViews.Profile.class)
  private LocalDate dateStart;

  @JsonView(UserViews.Profile.class)
  private LocalDate dateFinish;

  private UserRs user;
}
