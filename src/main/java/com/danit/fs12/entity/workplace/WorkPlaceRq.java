package com.danit.fs12.entity.workplace;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
public class WorkPlaceRq {

  @NotNull(message = "User job position should be specified.")
  private String position;

  @NotNull(message = "User job responsibilities should be specified.")
  private String responsibilities;

  @NotNull(message = "Start date should should be specified.")
  private LocalDate dateStart;

  @NotNull(message = "Finish date should should be specified.")
  private LocalDate dateFinish;

  @NotNull(message = "Organization id should be specified.")
  private String organizationId;
}
