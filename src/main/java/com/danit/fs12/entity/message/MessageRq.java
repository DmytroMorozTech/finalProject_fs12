package com.danit.fs12.entity.message;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class MessageRq {

  private Long id;

  @NotNull(message = "Text message can not be null")
  @Size(min = 2, message = "Text message must have more than 2 characters ")
  private String userMessageFrom;

  @NotNull(message = "Text message can not be null")
  @Size(min = 2, message = "Text message must have more than 2 characters ")
  private String userMessageTo;

  @NotNull(message = "Text message can not be null")
  @Size(min = 2, max = 500, message = "Text message must have more than 2 and maximum 500 characters ")
  private String textMessage;

}
