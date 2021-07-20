package com.danit.fs12.dto;

import lombok.Data;


@Data
public class MessageDtoRes {

  private Long id;
  private String userMessageFrom;
  private String userMessageTo;
  private String textMessage;

}
