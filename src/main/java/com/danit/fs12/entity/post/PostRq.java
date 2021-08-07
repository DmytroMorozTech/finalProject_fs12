package com.danit.fs12.entity.post;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class PostRq {

  @Size(min = 1, max = 1000, message = "Length of post message should be within range 1-1000 characters")
  // on original LinkedIn the maxLength of post text field is 1300 characters

  @NotNull(message = "Post text should be specified")
  String text;

}
