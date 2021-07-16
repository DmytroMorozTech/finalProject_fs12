package com.danit.fs12.controller;

import com.danit.fs12.facade.MessageFacade;
import com.danit.fs12.service.MessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class MessageController {

  private final MessageService messageService;
  private final MessageFacade messageFacade;

  @GetMapping("/message")
  public void getMessage() {

    return ;
  }

  @PostMapping("/message")
  public void postMessage() {

    return ;
  }
}

