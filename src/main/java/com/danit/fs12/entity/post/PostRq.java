package com.danit.fs12.entity.post;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class PostRq {

  @Size(min = 1, max = 3000, message = "Length of post message should be within range 1-3000 characters")
  // on original LinkedIn the maxLength of post text field is 1300 characters
  @NotNull(message = "Post text should be specified")
  String text;

  @Size(max = 100, message = "Length of imgPublicId should not exceed 100 characters")
  private String imgPublicId;

  @Size(max = 100, message = "Length of videoPublicId should not exceed 100 characters")
  private String videoPublicId;

}
