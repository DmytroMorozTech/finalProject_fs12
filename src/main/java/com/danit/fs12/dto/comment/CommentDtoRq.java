package com.danit.fs12.dto.comment;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class CommentDtoRq {

  @NotNull(message = "activeUserId should be specified.")
  Long activeUserId;

  @NotNull(message = "postId should be specified.")
  Long postId;

  @NotNull(message = "text of comment should be specified.")
  String text;

}
