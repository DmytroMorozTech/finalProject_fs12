package com.danit.fs12.entity.message;

import lombok.Data;


@Data
public class MessageRs {

  private Long id;
  private Long activeUserId;
  private Long chatId;
  private String text;

}
