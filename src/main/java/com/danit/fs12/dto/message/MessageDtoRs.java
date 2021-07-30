package com.danit.fs12.dto.message;

import lombok.Data;


@Data
public class MessageDtoRs {

  private Long id;
  private Long activeUserId;
  private Long chatId;
  private String text;
}
