package com.danit.fs12.entity.user;

import com.danit.fs12.controller.views.CommentViews;
import com.danit.fs12.controller.views.InvitationViews;
import com.danit.fs12.controller.views.NotificationViews;
import com.danit.fs12.controller.views.PostViews;
import com.danit.fs12.controller.views.UserViews;
import com.danit.fs12.entity.certification.CertificationRs;
import com.danit.fs12.entity.education.EducationRs;
import com.danit.fs12.entity.group.Group;
import com.danit.fs12.entity.workplace.WorkPlaceRs;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Data
public class UserRs {
  @JsonView({UserViews.Base.class, PostViews.Base.class, CommentViews.Base.class, InvitationViews.Base.class,
    NotificationViews.Base.class})
  private Long id;

  @JsonView({UserViews.Base.class, PostViews.Base.class})
  private LocalDateTime createdDate;

  private LocalDateTime lastModifiedDate;

  @JsonView({UserViews.Base.class})
  private String firstName;

  @JsonView({UserViews.Base.class})
  private String lastName;

  @JsonView(UserViews.Profile.class)
  private String headline;

  @JsonView(UserViews.Profile.class)
  private String country;

  @JsonView(UserViews.Profile.class)
  private String city;

  @JsonView({UserViews.Base.class, PostViews.Base.class, CommentViews.Base.class, InvitationViews.Base.class})
  private String fullName;

  @JsonView({UserViews.Base.class, PostViews.Base.class, CommentViews.Base.class, InvitationViews.Base.class})
  private String avatarPublicId;

  @JsonView({UserViews.Base.class, UserViews.Profile.class})
  private String profileBgPublicId;

  @JsonView({UserViews.Base.class, PostViews.Base.class, CommentViews.Base.class, InvitationViews.Base.class})
  private String positionAndCompany;

  @JsonView(UserViews.Profile.class)
  private String phoneNumber;

  @JsonView(UserViews.Profile.class)
  private String age;

  @JsonView(UserViews.Base.class)
  private String email;

  @JsonView(UserViews.Profile.class)
  private List<Group> groups;

  @JsonView(UserViews.Profile.class)
  private List<WorkPlaceRs> workPlaces;

  @JsonView(UserViews.Profile.class)
  private List<EducationRs> educations;

  @JsonView(UserViews.Profile.class)
  private List<CertificationRs> certifications;

  @JsonView({UserViews.Base.class})
  private Boolean isFollowedByActiveUser;

  @JsonView({UserViews.Base.class})
  private Integer numberOfFollowers;

}
