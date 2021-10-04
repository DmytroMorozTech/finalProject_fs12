package com.danit.fs12.facade;

import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.chat.ChatRq;
import com.danit.fs12.entity.chat.ChatRs;
import com.danit.fs12.service.ChatService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class ChatFacade extends GeneralFacade<Chat, ChatRq, ChatRs> {
  private final ChatService chatService;

  public ChatRs createChat() {
    Chat chat = chatService.createChat();
    return convertToDto(chat);
  }

  public ChatRs addUser(ChatRq chatRq) {
    Chat chat = chatService.addUser(chatRq.getUserId(), chatRq.getChatId());
    return convertToDto(chat);
  }

  public List<ChatRs> getUserChats(Long userId) {
    List<Chat> chats = chatService.getUserChats(userId);
    List<ChatRs> chatsRs = chats.stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());

    return chatsRs;
  }

  public ChatRs createChatIfNoExist(Long userId, ChatRq rq) {
    Chat chat = chatService.createChatIfNoExist(userId, rq.getText());
    return convertToDto(chat);
  }

  public List<ChatRs> findChatByMemberName(String text) {
    List<Chat> chats = chatService.findChatByMemberName(text);
    return chats.stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());
  }
}
