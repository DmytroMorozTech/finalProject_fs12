package com.danit.fs12.dto.post;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class PostDtoRq {

  @NotNull(message = "userId should be specified.")
  Long userId;

  @NotNull(message = "Post title should be specified")
  String title;

  @NotNull(message = "Post main text should be specified")
  String mainText;

}
