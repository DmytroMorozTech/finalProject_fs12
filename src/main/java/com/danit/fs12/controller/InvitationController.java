package com.danit.fs12.controller;

import com.danit.fs12.entity.invitation.Invitation;
import com.danit.fs12.entity.invitation.InvitationRq;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.InvitationRepository;
import com.danit.fs12.service.UserService;
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
@RequestMapping(path = "/api/invitations")
@RequiredArgsConstructor
public class InvitationController {
  private final InvitationRepository invitationRepository;
  private final UserService userService;

  @PostMapping
  public ResponseEntity<String> createInvitation(@Valid @RequestBody InvitationRq rq) {
    User userWho = userService.getActiveUser();
    User userWhom = userService.findEntityById(rq.getUserWhomId());
    String text = rq.getText();
    Invitation invitation = new Invitation(text, userWho, userWhom);
    Invitation savedInvitation = invitationRepository.save(invitation);
    userWho.getInvitations().add(savedInvitation);
    return ResponseEntity.ok("Well done");
  }

//  @DeleteMapping(path = "{id}")
//  public ResponseEntity<?> deleteById(@PathVariable Long id) {
//    invitationFacade.deleteById(id);
//    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//  }

}
