package com.danit.fs12.facade;

import com.danit.fs12.dto.message.MessageDtoRq;
import com.danit.fs12.dto.message.MessageDtoRs;
import com.danit.fs12.entity.Message;
import com.danit.fs12.service.MessageService;
import org.springframework.stereotype.Component;

@Component
public class MessageFacade extends GeneralFacade<Message, MessageDtoRq, MessageDtoRs> {
  private MessageService messageService;

  public MessageDtoRs createMessage(Long activeUserId, Long chatId, String text) {
    Message message = messageService.createMessage(activeUserId, chatId, text);
    return convertToDto(message);
  }
}
