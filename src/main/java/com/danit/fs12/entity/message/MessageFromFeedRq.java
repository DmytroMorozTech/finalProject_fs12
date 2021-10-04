package com.danit.fs12.entity.message;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class MessageFromFeedRq {

  @NotNull(message = "userWhomId should be specified.")
  private Long userWhomId;

  @NotNull(message = "Text message can not be null")
  @Size(min = 2, max = 500, message = "Text message must have more than 2 and less than 500 characters ")
  private String text;

}
