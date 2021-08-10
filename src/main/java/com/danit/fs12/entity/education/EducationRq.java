package com.danit.fs12.entity.education;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
public class EducationRq {

  @NotNull(message = "User id should be specified.")
  private Long userId;

  @NotNull(message = "School should be specified.")
  private String school;

  @NotNull(message = "Education degree should be specified.")
  private String degree;

  @NotNull(message = "Activities should be specified.")
  private String activities;

  @NotNull(message = "Description should be specified.")
  private String description;

  @NotNull(message = "Field of study should be specified.")
  private String fieldOfStudy;

  @NotNull(message = "Start education date should be specified.")
  private LocalDate dateStart;

  @NotNull(message = "Finish education date id should be specified.")
  private LocalDate dateFinish;
}
