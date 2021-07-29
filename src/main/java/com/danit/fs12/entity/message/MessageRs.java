package com.danit.fs12.entity.message;

import lombok.Data;


@Data
public class MessageRs {

  private Long id;
  private String userMessageFrom;
  private String userMessageTo;
  private String textMessage;

}
