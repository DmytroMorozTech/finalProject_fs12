package com.danit.fs12.entity.post;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class PostRq {

  @NotNull(message = "Post text should be specified")
  String text;

}
