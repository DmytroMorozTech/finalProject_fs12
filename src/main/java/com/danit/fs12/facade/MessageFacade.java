package com.danit.fs12.facade;

import com.danit.fs12.dto.message.MessageDtoReq;
import com.danit.fs12.dto.message.MessageDtoRes;
import com.danit.fs12.entity.Message;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class MessageFacade {
  private final ModelMapper modelMapper;

  public MessageFacade() {
    this.modelMapper = new ModelMapper();
  }

  public MessageDtoRes convertToDto(Message message) {
    return modelMapper.map(message, MessageDtoRes.class);
  }

  public Message convertToEntity(MessageDtoReq messageDtoReq) {
    return modelMapper.map(messageDtoReq, Message.class);
  }
}
