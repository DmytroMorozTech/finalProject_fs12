package com.danit.fs12.service;

import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.ChatRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChatService extends GeneralService<Chat> {

  private final UserRepository userRepository;
  private final ChatRepository chatRepository;
  private final UserService userService;

  public Chat createChat() {
    Long activeUserId = userService.getActiveUser().getId();
    User user = userRepository.findEntityById(activeUserId);
    Chat chat = save(new Chat());
    user.addChat(chat);
    userRepository.save(user);

    return chat;
  }

  public Chat addUser(Long userId, Long chatId) {
    User user = userRepository.findEntityById(userId);
    Chat chat = chatRepository.findEntityById(chatId);
    chat.addUser(user);
    chatRepository.save(chat);

    return chat;
  }

  public List<User> getChatUsers(Long chatId) {
    Chat chat = chatRepository.findEntityById(chatId);

    return chat.getUsers();
  }

  public List<Chat> getUserChats(Long userId) {
    User user = userRepository.findEntityById(userId);
    System.out.println(user);

    return user.getChats();
  }
}