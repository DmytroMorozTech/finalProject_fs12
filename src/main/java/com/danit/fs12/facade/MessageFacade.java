package com.danit.fs12.facade;

import com.danit.fs12.dto.message.MessageDtoRq;
import com.danit.fs12.dto.message.MessageDtoRs;
import com.danit.fs12.entity.Message;
import com.danit.fs12.repository.MessageRepository;
import org.springframework.stereotype.Component;

@Component
public class MessageFacade extends GeneralFacade<Message, MessageDtoRq, MessageDtoRs, MessageRepository>{

}
