package com.danit.fs12.entity.comment;

import com.danit.fs12.entity.user.UserRs;
import lombok.Data;

import java.util.Date;

@Data
public class CommentRs {

  private Long id;
  private String text;
  private UserRs user;
  private Date createdDate;
  private Date lastModifiedDate;
  private String timePassedSinceCreated;
//  private Long numberOfCommentLikes;

}
