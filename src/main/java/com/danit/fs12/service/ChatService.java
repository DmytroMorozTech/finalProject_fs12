package com.danit.fs12.service;

import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.ChatRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ChatService extends GeneralService<Chat> {

  private final UserRepository userRepository;
  private final ChatRepository chatRepository;
  private final UserService userService;
  private final MessageService messageService;

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
    return user.getChats();
  }

  public Chat createChatIfNoExist(Long userId, String text) {
    Chat chat = createChat();
    Long chatId = chat.getId();
    messageService.createMessage(chatId, text);

    return addUser(userId, chatId);
  }

  public List<Chat> findChatByMemberName(String text) {
    Long activeUserId = userService.getActiveUser().getId();
    List<Chat> userChats = userService.getActiveUser().getChats();
    return userChats.stream()
      .filter(c -> c.getUsers().stream()
        .anyMatch(u -> !u.getId().equals(activeUserId)
          && (u.getFirstName().toLowerCase().trim().contains(text.toLowerCase().trim())
          || u.getLastName().toLowerCase().trim().contains(text.toLowerCase().trim())))).collect(Collectors.toList());
  }
}