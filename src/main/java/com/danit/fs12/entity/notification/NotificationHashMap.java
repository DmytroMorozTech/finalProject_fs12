package com.danit.fs12.entity.notification;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.HashMap;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotificationHashMap implements Serializable {
  private final static long serialVersionUID = 7702L;

  HashMap<Character, Character> dataNotification  = new HashMap<>();

}