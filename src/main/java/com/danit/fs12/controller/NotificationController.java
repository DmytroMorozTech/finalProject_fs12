package com.danit.fs12.controller;

import com.danit.fs12.entity.notification.NotificationRq;
import com.danit.fs12.entity.notification.NotificationRs;
import com.danit.fs12.facade.NotificationFacade;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping(path = "/api/notifications")
@RequiredArgsConstructor
public class NotificationController {
  private final NotificationFacade notificationFacade;

  @GetMapping
  @JsonView(UserViews.Profile.class)
  List<NotificationRs> findAll() {
    return notificationFacade.findAll();
  }

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    notificationFacade.deleteById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

}
