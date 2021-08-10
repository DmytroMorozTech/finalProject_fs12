package com.danit.fs12.entity.workplace;

import com.danit.fs12.entity.organization.OrganizationRs;
import com.danit.fs12.entity.user.UserRs;
import lombok.Data;

import java.time.LocalDate;

@Data
public class WorkPlaceRs {

  private Long id;
  private String position;
  private String responsibilities;
  private LocalDate dateStart;
  private LocalDate dateFinish;
  private UserRs userRs;
  private OrganizationRs organizationRs;
}
