package com.danit.fs12.entity.post;

import lombok.Data;

@Data
public class PostRs {

  private Long id;
  Long userId;
  String title;
  String mainText;
  Long numberOfLikes;
}
