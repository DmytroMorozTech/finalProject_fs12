package com.danit.fs12.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;


@Entity
@Table(name = "messages") // this table will be the connecting table for users and chats
@EqualsAndHashCode(
    callSuper = true,
    exclude = {"id"}
    )
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Message extends AbstractEntityWithoutId {

  @EmbeddedId
  private MessageId id;

  @ManyToOne
  @MapsId("userId")
  @JoinColumn(name = "user_id")
  private User user;
  // @MapsId("userId") - this annotation says that this user is a part of id
  // of this message.
  // and we have an EmbeddedId represented by a composite key here...

  @ManyToOne
  @MapsId("chatId")
  @JoinColumn(name = "chat_id")
  private Chat chat;

  private String text;

}
