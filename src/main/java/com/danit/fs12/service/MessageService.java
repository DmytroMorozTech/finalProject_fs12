package com.danit.fs12.service;


import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.message.MessageFromFeedRq;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.repository.ChatRepository;
import com.danit.fs12.repository.MessageRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessageService extends GeneralService<Message> {
  private final UserRepository userRepository;
  private final ChatRepository chatRepository;
  private final MessageRepository messageRepository;
  private final UserService userService;

  public Message createMessage(Long chatId, String text) {
    Long activeUserId = userService.getActiveUser().getId();
    Optional<User> userOpt = userRepository.findById(activeUserId);
    Optional<Chat> chatOpt = chatRepository.findById(chatId);

    if (userOpt.isEmpty() || chatOpt.isEmpty()) {
      String msg = String.format("An error while trying to create new message. Extra data: "
        + "chatId: %d, text: %s", chatId, text);
      throw new BadRequestException(msg);
    }

    User user = userOpt.get();
    Message message = new Message();
    message.setText(text);
    message.setIsViewed(false);
    messageRepository.save(message);
    user.addMessage(message);
    userRepository.save(user);
    Chat chat = chatOpt.get();
    chat.addMessage(message);
    chatRepository.save(chat);

    return message;
  }

  public List<Message> getMessagesByChatId(Long chatId) {
    return messageRepository.findMessagesByChat_Id(chatId);
  }

  public Boolean createMessageFromFeed(MessageFromFeedRq rq) {
    String text = rq.getText();
    Long userWhomId = rq.getUserWhomId();
    User activeUser = userService.getActiveUser();

    Optional<Chat> chatOptional = activeUser.getChats().stream()
      .filter(
        chat -> chat.getUsers().stream().map(AbstractEntity::getId).collect(Collectors.toList()).contains(userWhomId)
      ).findFirst();

    if (chatOptional.isPresent()) {
      Long chatId = chatOptional.get().getId();
      createMessage(chatId, text);
      return true;
    }

    User userWhom = userService.findEntityById(userWhomId);

    Chat chat = chatRepository.save(new Chat());
    activeUser.addChat(chat);
    userWhom.addChat(chat);
    userRepository.save(activeUser);
    userRepository.save(userWhom);

    createMessage(chat.getId(), text);
    return true;

  }

  public void setAllChatMessagesViewed(Long chatId) {
    Long userId = userService.getActiveUser().getId();
    List<Message> chatMessages = getMessagesByChatId(chatId);
    chatMessages.forEach(m -> {
      if (!m.getUserId().equals(userId)) {
        m.setIsViewed(true);
        messageRepository.save(m);
      }
    });
  }

  public Long getNumberOfNewMessages() {
    final Long[] numberOfNewMessages = {0L};
    User activeUser = userService.getActiveUser();
    Long userId = activeUser.getId();
    List<Chat> chats = activeUser.getChats();
    Set<Long> chatsUserIds = new HashSet<>();
    chats.forEach(c -> {
      chatsUserIds.add(c.getId());
    });
    chatsUserIds.forEach(c -> {
      List<Message> chatMessages = messageRepository.findMessagesByChat_Id(c);
      chatMessages.forEach(m -> {
        if (!m.getUserId().equals(userId) && !m.getIsViewed()) {
          numberOfNewMessages[0] += 1;
        }
      });
    });
    return numberOfNewMessages[0];
  }
}
