package com.danit.fs12.entity.user;

import com.danit.fs12.controller.PostViews;
import com.danit.fs12.controller.UserViews;
import com.danit.fs12.entity.certification.Certification;
import com.danit.fs12.entity.education.Education;
import com.danit.fs12.entity.group.Group;
import com.danit.fs12.entity.workplace.WorkPlace;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Set;

@Data
public class UserRs {

  @JsonView({UserViews.Base.class,PostViews.Base.class})
  private Long id;

  @JsonView({UserViews.Base.class,PostViews.Base.class})
  private LocalDateTime createdDate;

  private LocalDateTime lastModifiedDate;

  private String firstName;

  private String lastName;

  @JsonView({UserViews.Base.class,PostViews.Base.class})
  private String fullName;

  @JsonView({UserViews.Base.class,PostViews.Base.class})
  private String avatarUrl;

  @JsonView({UserViews.Base.class,PostViews.Base.class})
  private String positionAndCompany;

  @JsonView(UserViews.Profile.class)
  private String phoneNumber;

  @JsonView(UserViews.Profile.class)
  private String age;

  @JsonView(UserViews.Profile.class)
  private String email;

  @JsonView(UserViews.Profile.class)
  private List<Group> groups;

  @JsonView(UserViews.Profile.class)
  private Set<User> usersFollowed;

  @JsonView(UserViews.Profile.class)
  private Set<User> usersFollowing;

  @JsonView(UserViews.Profile.class)
  private List<WorkPlace> workPlaces;

  @JsonView(UserViews.Profile.class)
  private List<Education> educations;

  @JsonView(UserViews.Profile.class)
  private List<Certification> certifications;




}
