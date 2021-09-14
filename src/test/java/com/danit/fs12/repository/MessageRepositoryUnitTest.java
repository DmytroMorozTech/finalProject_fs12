package com.danit.fs12.repository;

import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.message.Message;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

@DataJpaTest
@Disabled("Disabled until error related to Liquibase is fixed")
public class MessageRepositoryUnitTest {
    private static final Long chatId = 1L;
    private static final String text1 = "First message text";
    private static final String text2 = "Second message text";

    @Autowired
    private MessageRepository messageRepository;

    @Test
    public void findMessagesByChatIdTest() {
        Message message1 = new Message();
        message1.setText(text1);
        Message message2 = new Message();
        message1.setText(text2);

        Chat chat = new Chat();
        chat.setId(1L);
        chat.addMessage(message1);
        chat.addMessage(message2);

        message1.setChat(chat);
        message2.setChat(chat);

        List<Message> messages = messageRepository.findMessagesByChat_Id(chatId);

        Assertions.assertThat(messages.size()).isEqualTo(2);
    }
}
