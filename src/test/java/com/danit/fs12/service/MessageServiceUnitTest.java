package com.danit.fs12.service;

import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.repository.ChatRepository;
import com.danit.fs12.repository.MessageRepository;
import com.danit.fs12.repository.UserRepository;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@Disabled("Disabled until error related to Liquibase is fixed")
@ExtendWith(SpringExtension.class)
public class MessageServiceUnitTest {

    private static final Long userId = 1L;
    private static final Long chatId = 15L;
    private static final User user1 = mock(User.class);
    private static final User user2 = mock(User.class);
    private static final Message message1 = mock(Message.class);
    private static final Message message2 = mock(Message.class);
    private static final String text1 = "First message text";
    private static final String text2 = "Second message text";
    private static final Chat chat1 = mock(Chat.class);
    @MockBean
    private UserService userService;
    @MockBean
    private MessageRepository messageRepository;
    @MockBean
    private ChatRepository chatRepository;
    @MockBean
    private UserRepository userRepository;

    @BeforeAll
    public static void setup() {
        Faker faker = new Faker();

        user1.setId(1L);
        user1.setEmail(faker.internet().emailAddress());
        user1.setFirstName(faker.name().firstName());
        user1.setLastName(faker.name().lastName());
        user1.setChats(Stream.of(chat1).collect(Collectors.toList()));

        user2.setId(2L);
        user2.setEmail(faker.internet().emailAddress());
        user2.setFirstName(faker.name().firstName());
        user2.setLastName(faker.name().lastName());

        chat1.setId(chatId);
        chat1.addUser(user1);
        chat1.addUser(user2);
        chat1.addMessage(message1);
        chat1.addMessage(message2);

        message1.setUser(user1);
        message1.setChat(chat1);
        message1.setText(text1);

        message2.setUser(user2);
        message2.setChat(chat1);
        message2.setText(text2);
    }

    @Test
    public void CanCreateMessage() {
        MessageService messageService = new MessageService(userRepository,
                chatRepository,
                messageRepository,
                userService);

        Optional<User> userOpt = Optional.of(user1);
        Optional<Chat> chatOpt = Optional.of(chat1);

        Message message = new Message();
        message.setText(text1);

        when(userService.getActiveUser()).thenReturn(user1);
        when(userService.getActiveUser().getId()).thenReturn(userId);
        when(userRepository.findById(userId)).thenReturn(userOpt);
        when(chatRepository.findById(chatId)).thenReturn(chatOpt);

        Assertions.assertEquals(message, messageService.createMessage(chatId, text1));
    }

    @Test
    public void TestCanCreateMessageThrowsBadRequestException() {
        MessageService messageService = new MessageService(userRepository, chatRepository, messageRepository, userService);

        Optional<User> userOpt = Optional.of(user1);
        Optional<Chat> chatOpt = Optional.of(chat1);
        Message message = new Message();
        message.setText(text1);

        when(userService.getActiveUser()).thenReturn(user1);
        when(userService.getActiveUser().getId()).thenReturn(userId);
        when(userRepository.findById(userId)).thenReturn(userOpt);
        when(chatRepository.findById(chatId)).thenReturn(chatOpt);

        BadRequestException exception = Assertions.assertThrows(
                BadRequestException.class,
                () -> messageService.createMessage(13L, text1));

        Assertions.assertTrue(exception.getMessage().contains("An error while trying to create new message."));
    }

    @Test
    public void CanGetMessagesByChatId() {
        MessageService messageService = new MessageService(userRepository, chatRepository, messageRepository, userService);
        when(messageRepository.findMessagesByChat_Id(chatId))
                .thenReturn(Stream.of(message1, message2).collect(Collectors.toList()));

        Assertions.assertEquals(2, messageService.getMessagesByChatId(chatId).size());
        Assertions.assertNotEquals(3, messageService.getMessagesByChatId(chatId).size());
    }
}
