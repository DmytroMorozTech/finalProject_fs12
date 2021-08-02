package com.danit.fs12.facade;

import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.chat.ChatRq;
import com.danit.fs12.entity.chat.ChatRs;
import com.danit.fs12.service.ChatService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class ChatFacade extends GeneralFacade<Chat, ChatRq, ChatRs> {
  private final ChatService chatService;

  public ChatRs createChat(ChatRq chatRq){
    Chat chat = chatService.createChat(chatRq.getUserId());
    return convertToDto(chat);
  }
}
