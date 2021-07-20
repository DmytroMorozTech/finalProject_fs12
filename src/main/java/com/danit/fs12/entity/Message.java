package com.danit.fs12.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity(name = "Message")
@Table(name = "messages")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Message extends AbstractEntity {

  private String userMessageFrom;
  private String userMessageTo;
  private String textMessage;

  @JsonIgnore
  @ManyToOne(cascade = {CascadeType.PERSIST})
  @JoinTable(
      name = "rel_user_messages",
      joinColumns = {
          @JoinColumn(
              name = "message_id",
              referencedColumnName = "id")
      },
      inverseJoinColumns = {
          @JoinColumn(name = "user_id",
              referencedColumnName = "id")
      })
  private User user;

}
