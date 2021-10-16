package com.danit.fs12.facade;


import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.message.MessageFromFeedRq;
import com.danit.fs12.entity.message.MessageRq;
import com.danit.fs12.entity.message.MessageRs;
import com.danit.fs12.service.MessageService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class MessageFacade extends GeneralFacade<Message, MessageRq, MessageRs> {
  private final MessageService messageService;

  public MessageRs createMessage(MessageRq rq) {
    Message message = messageService.createMessage(rq.getChatId(), rq.getText());
    return convertToDto(message);
  }

  public List<MessageRs> getMessagesByChatId(Long id) {
    List<Message> messages = messageService.getMessagesByChatId(id);
    List<MessageRs> messageRs = messages.stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());

    return messageRs;
  }

  public Boolean createMessageFromFeed(MessageFromFeedRq rq) {
    return messageService.createMessageFromFeed(rq);

  }
}
