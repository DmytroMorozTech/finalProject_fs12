package com.danit.fs12.entity.chat;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class ChatRq {

  @NotNull(message = "User id should be specified.")
  private Long userId;
}
