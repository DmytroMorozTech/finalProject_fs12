package com.danit.fs12.dto.message;

import lombok.Data;


@Data
public class MessageDtoRs {

  private Long id;
  private String userMessageFrom;
  private String userMessageTo;
  private String textMessage;

}