package com.danit.fs12.entity.organization;

import com.danit.fs12.entity.workplace.WorkPlace;
import lombok.Data;

import java.util.List;

@Data
public class OrganizationRs {

  private Long id;
  private String name;
  private String location;
  private String email;
  private String industry;
  private String specialities;
  private String webSite;
  private Integer foundedInYear;
  private Integer numberOfEmployees;
  private String phoneNumber;
  private List<WorkPlace> workPlaceList;
}
