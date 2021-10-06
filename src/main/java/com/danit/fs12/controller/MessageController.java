package com.danit.fs12.controller;

import com.danit.fs12.entity.message.MessageFromFeedRq;
import com.danit.fs12.entity.message.MessageRq;
import com.danit.fs12.entity.message.MessageRs;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.facade.MessageFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
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
  List<MessageRs> findAll() {
    return messageFacade.findAll();
  }

  @GetMapping(path = "{id}")
  public ResponseEntity<MessageRs> findById(@PathVariable Long id) {
    MessageRs message = messageFacade.findById(id);
    return ResponseEntity.ok(message);
  }

  @PostMapping
  public ResponseEntity<?> createMessage(@Valid @RequestBody MessageRq rq) {
    MessageRs message = messageFacade.createMessage(rq);
    return ResponseEntity.ok(message);
  }

  @GetMapping(path = "/chat/{id}")
  public List<MessageRs> getMessagesByChatId(@PathVariable Long id) {
    return messageFacade.getMessagesByChatId(id);
  }

  @PostMapping(path = "/from_feed")
  public ResponseEntity<?> createMessageFromFeed(@Valid @RequestBody MessageFromFeedRq rq) {
    Boolean msgWasCreated = messageFacade.createMessageFromFeed(rq);
    if (!msgWasCreated) {
      throw new BadRequestException("Message was not created");
    }

    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

}
