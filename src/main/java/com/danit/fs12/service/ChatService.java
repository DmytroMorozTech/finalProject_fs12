package com.danit.fs12.service;

import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ChatService extends GeneralService<Chat> {

  private final UserRepository userRepository;

  public Chat createChat(Long userId) {

    Optional<User> userOpt = userRepository.findById(userId);
    if (userOpt.isEmpty()) {
      String msg = String.format("An error while trying to create chat. "
        + "User with id %d could not be found in DB", userId);
      throw new BadRequestException(msg);
    }

    User user = userOpt.get();
    Chat chat = save(new Chat());
    user.addChat(chat);
    userRepository.save(user);

    return chat;
  }
}
