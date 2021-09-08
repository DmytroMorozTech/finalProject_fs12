package com.danit.fs12.service;

import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.ChatRepository;
import com.danit.fs12.repository.MessageRepository;
import com.danit.fs12.repository.UserRepository;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
public class MessageServiceUnitTest {

    @Mock
    private MessageRepository messageRepository;
    @Mock
    private ChatRepository chatRepository;
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private MessageService messageService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    @WithMockUser
    void CanCreateMessage() {
        Faker faker = new Faker();
        Long chatId1 = 1L;

        String messageTest1 = faker.lorem().fixedString(300);
        final Message message = new Message(messageTest1);

        Chat chat1 = new Chat();
        chat1.setId(chatId1);
        chat1.addMessage(message);
        chatRepository.save(chat1);

        User user1 = new User();
        user1.setId(1L);
        user1.addMessage(message);
        userRepository.save(user1);

        given(messageRepository.save(message)).willAnswer(invocation -> invocation.getArgument(0));

        Message createdMessage = messageService.createMessage(chatId1, messageTest1);

        assertThat(createdMessage).isNotNull();

        verify(messageRepository).save(any(Message.class));
    }

    @Test
    @Disabled
    void getMessagesByChatId() {
        Faker faker = new Faker();
        String messageTest1 = faker.lorem().fixedString(300);
        Long chatId1 = 1L;
        Message message1 = new Message(messageTest1);

        Long activeUserId = 1L;

        final List<Message> messageList = new ArrayList<>();

        verify(messageRepository).findMessagesByChat_Id(chatId1);

    }
}
