package com.danit.fs12.service;

import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.ChatRepository;
import com.danit.fs12.repository.RepositoryInterface;
import com.danit.fs12.repository.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.mockito.AdditionalAnswers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class ChatServiceUnitTest {
    @Mock
    private UserRepository userRepository;
    @Mock
    private ChatRepository chatRepository;
    @Mock
    private UserService userService;
    @Mock
    private RepositoryInterface<Chat> repo;
    @InjectMocks
    private ChatService chatService;

    private static final Long userId = 1L;
    private static final Long chatId = 15L;
    private static final User userTest = mock(User.class);
    private static final Chat chatTest = mock(Chat.class);

    @Before
    public void prepare() {
        Field field = ReflectionUtils.findField(chatService.getClass(), "repo");
        field.setAccessible(true);
        ReflectionUtils.setField(field, chatService, repo);
    }

    @Test
    public void canCreateChat() {
        Chat chat = new Chat();

        when(userService.getActiveUser()).thenReturn(userTest);
        when(userRepository.findEntityById(userTest.getId())).thenReturn(userTest);
        when(repo.save(any(Chat.class))).then(AdditionalAnswers.returnsFirstArg());
        when(userRepository.save(any(User.class))).then(AdditionalAnswers.returnsFirstArg());

        Assert.assertEquals(chat, chatService.createChat());
        Assert.assertNotEquals(chatTest, chatService.createChat());
    }

    @Test
    public void canAddUser() {
        when(userRepository.findEntityById(userId)).thenReturn(userTest);
        when(chatRepository.findEntityById(chatId)).thenReturn(chatTest);
        when(chatRepository.save(any(Chat.class))).then(AdditionalAnswers.returnsFirstArg());
        chatTest.addUser(userTest);

        Assert.assertEquals(chatTest.getUsers(), chatService.addUser(userId, chatId).getUsers());
    }

    @Test
    public void canGetChatUsers() {
        when(chatRepository.findEntityById(chatId)).thenReturn(chatTest);
        chatTest.addUser(userTest);
        Assert.assertEquals(chatTest.getUsers(), chatService.getChatUsers(chatId));

        Long notExistChatId = 13L;
        NullPointerException exception = Assertions.assertThrows(
                NullPointerException.class,
                () -> chatService.getChatUsers(notExistChatId));
        Assertions.assertTrue(exception.getMessage().contains("is null"));
    }

    @Test
    public void canGetUserChats() {
        when(userRepository.findEntityById(userId)).thenReturn(userTest);
        userTest.addChat(chatTest);
        Assert.assertEquals(userTest.getChats(), chatService.getUserChats(userId));

        Long notExistUserId = 99L;
        NullPointerException exception = Assertions.assertThrows(
                NullPointerException.class,
                () -> chatService.getUserChats(notExistUserId));
        Assertions.assertTrue(exception.getMessage().contains("is null"));
    }

    @Test
    public void canFindChatByMemberName() {
        Chat chatTest2 = new Chat();
        Chat chatTest3 = new Chat();
        User userTest2 = new User();
        User userTest3 = new User();
        User userTest4 = new User();
        String userFirstName1 = "FirstName1";
        String userLastName1 = "LastName1";
        String userFirstName2 = "FirstName2";
        String userLastName2 = "LastName2";
        String userFirstName3 = "FirstName3";
        String userLastName3 = "LastName3";
        String userFirstName4 = "FirstName4";
        String userLastName4 = "LastName4";
        Long userId2 = 2L;
        Long userId3 = 3L;
        Long userId4 = 4L;
        userTest.setId(userId);
        userTest2.setId(userId2);
        userTest3.setId(userId3);
        userTest4.setId(userId4);
        userTest.setFirstName(userFirstName1);
        userTest.setLastName(userLastName1);
        userTest2.setFirstName(userFirstName2);
        userTest2.setLastName(userLastName2);
        userTest3.setFirstName(userFirstName3);
        userTest3.setLastName(userLastName3);
        userTest4.setFirstName(userFirstName4);
        userTest4.setLastName(userLastName4);
        chatTest.addUser(userTest);
        chatTest.addUser(userTest2);
        chatTest2.addUser(userTest3);
        chatTest2.addUser(userTest);
        chatTest3.addUser(userTest);
        chatTest3.addUser(userTest4);
        List<Chat> userChats = new ArrayList<>();
        userChats.add(chatTest);
        userChats.add(chatTest2);
        userChats.add(chatTest3);

        when(userService.getActiveUser()).thenReturn(userTest);
        when(userService.getActiveUser().getId()).thenReturn(userId);
        when(userService.getActiveUser().getChats()).thenReturn(userChats);

        Assertions.assertEquals(1, chatService.findChatByMemberName(userFirstName4).size());
    }
}
