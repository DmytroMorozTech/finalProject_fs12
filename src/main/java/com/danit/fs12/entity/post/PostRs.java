package com.danit.fs12.entity.post;

import lombok.Data;

import java.util.Date;

@Data
public class PostRs {

  private Long id;
  private Long authorId;
  private String text;
  private Long numberOfLikes;
  private Long numberOfComments;
  private Boolean isLikedByActiveUser;
  private Date createdDate;
  private Date lastModifiedDate;

}
