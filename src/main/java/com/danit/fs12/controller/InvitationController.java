package com.danit.fs12.controller;

import com.danit.fs12.entity.invitation.InvitationRq;
import com.danit.fs12.entity.invitation.InvitationRs;
import com.danit.fs12.facade.InvitationFacade;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequestMapping(path = "/api/invitations")
@RequiredArgsConstructor
public class InvitationController {
  private final InvitationFacade invitationFacade;

  @PostMapping
  @JsonView(InvitationViews.Base.class)
  public ResponseEntity<InvitationRs> createInvitation(@Valid @RequestBody InvitationRq rq) {
    InvitationRs invitation = invitationFacade.createInvitation(rq);
    return ResponseEntity.ok(invitation);
  }

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    invitationFacade.deleteById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

}
