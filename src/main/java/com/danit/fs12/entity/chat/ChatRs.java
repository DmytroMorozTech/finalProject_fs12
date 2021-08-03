package com.danit.fs12.entity.chat;

import com.danit.fs12.entity.user.User;
import lombok.Data;

import java.util.List;

@Data
public class ChatRs {

  private Long id;
  private List<User> users;
}
