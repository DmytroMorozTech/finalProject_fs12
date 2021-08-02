package com.danit.fs12.controller;

import com.danit.fs12.entity.chat.ChatRq;
import com.danit.fs12.entity.chat.ChatRs;
import com.danit.fs12.facade.ChatFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/chats")
public class ChatController {
  private final ChatFacade chatFacade;

  @PostMapping
  public ResponseEntity<ChatRs> createChat(@Valid @RequestBody ChatRq chatRq){
    ChatRs chatRs = chatFacade.createChat(chatRq);
    return ResponseEntity.ok(chatRs);
  }
}
