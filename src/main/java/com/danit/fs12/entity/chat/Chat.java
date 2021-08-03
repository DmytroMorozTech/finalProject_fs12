package com.danit.fs12.entity.chat;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "chats")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Chat extends AbstractEntity {

  @ManyToMany(mappedBy = "chats")
  private List<User> users = new ArrayList<>();

  @OneToMany(mappedBy = "chat")
  private List<Message> messages = new ArrayList<>();

  public Message addMessage(Message message) {
    if (!this.messages.contains(message)) {
      this.messages.add(message);
      message.setChat(this);
    }
    return message;
  }

  public User addUser(User user) {
    if (!this.users.contains(user)) {
      this.users.add(user);
      user.getChats().add(this);
    }
    return user;
  }
}
