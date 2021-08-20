package com.danit.fs12.controller;

import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.MessageRepository;
import com.danit.fs12.repository.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

// in integration tests we test all application layers
@SpringBootTest
@AutoConfigureMockMvc
public class MessageControllerMockIntegrationTest {

    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MockMvc mockMvc;

    // after each test we have to clear our DB
    public void resetDb() {
        messageRepository.deleteAll();
    }

    private Message createTestMessage(User user, Chat chat, String text) {
        Message emptyMessage = new Message(user, chat, text);
        return messageRepository.save(emptyMessage);
    }

}
