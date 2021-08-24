package com.danit.fs12.entity.organization;

import com.danit.fs12.controller.UserViews;
import com.danit.fs12.entity.workplace.WorkPlace;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.util.List;

@Data
public class OrganizationRs {

  private Long id;

  @JsonView(UserViews.Profile.class)
  private String name;

  @JsonView(UserViews.Profile.class)
  private String location;

  private String email;
  private String industry;

  private String specialities;

  @JsonView(UserViews.Profile.class)
  private String webSite;

  private Integer foundedInYear;

  private Integer numberOfEmployees;

  private String phoneNumber;

  private List<WorkPlace> workPlaceList;
}
