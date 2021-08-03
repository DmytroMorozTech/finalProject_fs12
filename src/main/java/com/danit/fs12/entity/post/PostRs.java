package com.danit.fs12.entity.post;

import com.danit.fs12.entity.user.UserRs;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class PostRs {

  private Long id;
  private String text;
  private Long numberOfLikes;
  private Long numberOfComments;
  private Boolean isLikedByActiveUser;
  private Date createdDate;
  private Date lastModifiedDate;
  private UserRs user;
  private List<UserRs> usersWhoLikedPost;

}
