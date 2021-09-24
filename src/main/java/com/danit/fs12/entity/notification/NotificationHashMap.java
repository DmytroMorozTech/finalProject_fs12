package com.danit.fs12.entity.notification;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotificationHashMap implements Serializable {
  private final static long serialVersionUID = 7702L;

  Map<Long, Long> dataNotification  = new HashMap<>();

}