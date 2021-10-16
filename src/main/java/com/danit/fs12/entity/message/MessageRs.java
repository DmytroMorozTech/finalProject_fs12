package com.danit.fs12.entity.message;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MessageRs {

  private Long id;
  private Long userId;
  private Long chatId;
  private String text;
  private LocalDateTime createdDate;
  private Boolean isViewed;

}
