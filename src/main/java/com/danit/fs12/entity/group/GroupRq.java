package com.danit.fs12.entity.group;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class GroupRq {

  @NotNull(message = "Group name should be specified.")
  private String groupName;

  @NotNull(message = "Description should be specified.")
  private String description;

  @NotNull(message = "Industry should be specified.")
  private String industry;

  @NotNull(message = "Location should be specified.")
  private String location;

  @NotNull(message = "Group rules should be specified.")
  private String rules;
}
