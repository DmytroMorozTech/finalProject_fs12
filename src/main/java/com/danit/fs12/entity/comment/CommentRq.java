package com.danit.fs12.entity.comment;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class CommentRq {

  @NotNull(message = "postId should be specified.")
  Long postId;

  @Size(min = 1, max = 800, message = "Length of comment message should be within range 1-800 characters")
  // on original LinkedIn the maxLength of comments field is 1250 characters
  @NotNull(message = "text of comment should be specified.")
  String text;

}
