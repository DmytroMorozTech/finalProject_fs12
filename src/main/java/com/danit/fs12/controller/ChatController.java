package com.danit.fs12.controller;

import com.danit.fs12.entity.chat.ChatRq;
import com.danit.fs12.entity.chat.ChatRs;
import com.danit.fs12.facade.ChatFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/chats")
public class ChatController {
  private final ChatFacade chatFacade;

  @PostMapping
  public ResponseEntity<ChatRs> createChat() {
    ChatRs chatRs = chatFacade.createChat();
    return ResponseEntity.ok(chatRs);
  }

  @PutMapping
  public ResponseEntity<ChatRs> addUser(@Valid @RequestBody ChatRq chatRq) {
    ChatRs chatRs = chatFacade.addUser(chatRq);
    return ResponseEntity.ok(chatRs);
  }

  @GetMapping(path = "{id}")
  public ResponseEntity<ChatRs> findById(@PathVariable Long id) {
    ChatRs chatRs = chatFacade.findById(id);
    return ResponseEntity.ok(chatRs);
  }

  @GetMapping
  List<ChatRs> findAll() {
    return chatFacade.findAll();
  }

  @GetMapping(path = "/user/{id}")
  List<ChatRs> getUserChats(@PathVariable Long id) {
    return chatFacade.getUserChats(id);
  }

  @PutMapping(path = "/new/{id}")
  public ResponseEntity<ChatRs> createChatIfNoExist(@PathVariable Long id, @RequestBody ChatRq rq) {
    ChatRs chatRs = chatFacade.createChatIfNoExist(id, rq);
    return ResponseEntity.ok(chatRs);
  }

  @GetMapping(path = "/filter/{text}")
  List<ChatRs> findChatByMemberName(@PathVariable String text) {
    return chatFacade.findChatByMemberName(text);
  }
}
