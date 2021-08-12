package com.danit.fs12.entity.education;

import com.danit.fs12.entity.user.UserRs;
import lombok.Data;

import java.time.LocalDate;

@Data
public class EducationRs {

  private Long id;
  private String school;
  private String degreeReceived;
  private String activities;
  private String description;
  private String fieldOfStudy;
  private LocalDate dateStart;
  private LocalDate dateFinish;
  private UserRs user;
}
