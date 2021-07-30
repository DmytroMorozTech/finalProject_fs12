package com.danit.fs12.controller;

import com.danit.fs12.dto.message.MessageDtoRq;
import com.danit.fs12.dto.message.MessageDtoRs;
import com.danit.fs12.facade.MessageFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RequestMapping("/api/messages")
@RestController
@RequiredArgsConstructor
public class MessageController {
  private final MessageFacade messageFacade;

  @GetMapping
  List<MessageDtoRs> findAll() {
    return messageFacade.findAll();
  }

  @GetMapping(path = "{id}")
  public ResponseEntity<MessageDtoRs> findById(@PathVariable Long id) {
    MessageDtoRs message = messageFacade.findById(id);
    return ResponseEntity.ok(message);
  }

  @PostMapping
  public ResponseEntity<?> createMessage(@Valid @RequestBody MessageDtoRq rq) {
    Long activeUserId = rq.getActiveUserId();
    Long chatId = rq.getChatId();
    String text = rq.getText();

    MessageDtoRs message = messageFacade.createMessage(activeUserId, chatId, text);
    return ResponseEntity.ok(message);
  }
}
