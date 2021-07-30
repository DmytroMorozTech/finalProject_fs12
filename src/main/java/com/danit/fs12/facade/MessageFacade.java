package com.danit.fs12.facade;


import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.message.MessageRq;
import com.danit.fs12.entity.message.MessageRs;
import com.danit.fs12.service.MessageService;
import org.springframework.stereotype.Component;

@Component
public class MessageFacade extends GeneralFacade<Message, MessageRq, MessageRs> {
  private MessageService messageService;

  public MessageRs createMessage(Long activeUserId, Long chatId, String text) {
    Message message = messageService.createMessage(activeUserId, chatId, text);
    return convertToDto(message);
  }
}
