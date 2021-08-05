package com.danit.fs12.entity.comment;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class CommentRq {

  @NotNull(message = "postId should be specified.")
  Long postId;

  @NotNull(message = "text of comment should be specified.")
  String text;

}
