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


@Table(name = "message")
@Entity(name = "Message")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Message extends AbstractEntity {

  private String userMessageFrom;

  private String userMessageToo;

  private String textMessage;

  @JsonIgnore
  @ManyToOne(cascade = {CascadeType.PERSIST})
  @JoinTable(
      name = "rel_user_messages",
      joinColumns = {
          @JoinColumn(
              name = "message_id", // как будет называться колонка в link table
              referencedColumnName = "id") // от куда мы берем ИД для текущей сущности (Message)
      },
      inverseJoinColumns = {
          @JoinColumn(name = "user_id",
              referencedColumnName = "id")// от куда мы берем ИД в сущности user
      })
  private User users;

}
