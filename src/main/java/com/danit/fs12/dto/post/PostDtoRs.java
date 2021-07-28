package com.danit.fs12.dto.post;

import lombok.Data;

@Data
public class PostDtoRs {

  private Long id;
  Long userId;
  String title;
  String mainText;

}
