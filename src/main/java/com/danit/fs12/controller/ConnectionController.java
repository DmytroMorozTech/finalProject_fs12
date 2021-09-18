package com.danit.fs12.controller;

import com.danit.fs12.facade.ConnectionFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;

@Slf4j
@RestController
@RequestMapping(path = "/api/connections")
@RequiredArgsConstructor
public class ConnectionController {
  private final ConnectionFacade connectionFacade;

  @Transactional
  @Modifying
  @DeleteMapping(path = "/{activeUserId}/{userWhomId}")
  public ResponseEntity<?> deleteByUserIds(@PathVariable Long activeUserId, @PathVariable Long userWhomId) {
    connectionFacade.deleteByUserIds(activeUserId, userWhomId);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

}
