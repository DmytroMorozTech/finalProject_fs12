package com.danit.fs12.entity.message;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class MessageRq {

  @NotNull(message = "activeUserId should be specified.")
  private Long activeUserId;

  @NotNull(message = "chatId should be specified.")
  private Long chatId;

  @NotNull(message = "Text message can not be null")
  @Size(min = 2, max = 500, message = "Text message must have more than 2 and maximum 500 characters ")
  private String text;
}
