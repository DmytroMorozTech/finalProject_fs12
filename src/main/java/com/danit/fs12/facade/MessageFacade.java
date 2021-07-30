package com.danit.fs12.facade;

import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.message.MessageRq;
import com.danit.fs12.entity.message.MessageRs;
import org.springframework.stereotype.Component;

@Component
public class MessageFacade extends GeneralFacade<Message, MessageRq, MessageRs> {

}
