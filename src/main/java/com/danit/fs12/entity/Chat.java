package com.danit.fs12.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
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

  @OneToMany(
      cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
      mappedBy = "chat"
      )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Message> messages = new ArrayList<>();

  public void addMessage(Message message) {
    if (!messages.contains(message)) {
      messages.add(message);
    }
  }

  public void removeMessage(Message message) {
    messages.remove(message);
  }

}
