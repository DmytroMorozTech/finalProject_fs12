package com.danit.fs12.service;


import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.repository.ChatRepository;
import com.danit.fs12.repository.MessageRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
}
