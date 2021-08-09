package com.danit.fs12.entity.group;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

public class GroupRq {

  @NotNull(message = "User id should be specified.")
  private Long userId;

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
