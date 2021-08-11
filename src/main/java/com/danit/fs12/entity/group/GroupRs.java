package com.danit.fs12.entity.group;

import com.danit.fs12.entity.user.User;
import lombok.Data;

import java.util.List;

@Data
public class GroupRs {

  private Long id;
  private String groupName;
  private String description;
  private String industry;
  private String location;
  private String rules;
  private List<User> users;


}
