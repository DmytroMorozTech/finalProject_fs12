package com.danit.fs12.service;

import com.danit.fs12.entity.certification.Certification;
import com.danit.fs12.repository.ChatRepository;
import com.danit.fs12.repository.RepositoryInterface;
import com.danit.fs12.repository.UserRepository;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;

@RunWith(MockitoJUnitRunner.class)
public class ChatServiceUnitTest {
    @Mock
    private UserRepository userRepository;
    @Mock
    private ChatRepository chatRepository;
    @Mock
    private UserService userService;
    @Mock
    private MessageService messageService;
    @Mock
    private RepositoryInterface<Certification> repo;
    @InjectMocks
    private ChatService chatService;

    @Before
    public void prepare() {
        Field field = ReflectionUtils.findField(chatService.getClass(), "repo");
        field.setAccessible(true);
        ReflectionUtils.setField(field, chatService, repo);
    }

    public void canCreateChat() {

    }
}
