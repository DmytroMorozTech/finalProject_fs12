package com.danit.fs12.facade;

import com.danit.fs12.entity.invitation.Invitation;
import com.danit.fs12.entity.invitation.InvitationRq;
import com.danit.fs12.entity.invitation.InvitationRs;
import com.danit.fs12.service.InvitationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class InvitationFacade extends GeneralFacade<Invitation, InvitationRq, InvitationRs> {
  private final InvitationService invitationService;

  public InvitationRs createInvitation(InvitationRq rq) {
    Invitation invitation = convertToEntity(rq);
    Long userWhomId = rq.getUserWhomId();
    Invitation savedInvitation = invitationService.createInvitation(invitation, userWhomId);
    return convertToDto(savedInvitation);
  }

  public void acceptInvitation(Long id) {
    invitationService.acceptInvitation(id);
  }

  public List<InvitationRs> getInvitationsForMe() {
    List<Invitation> invitationsForMe = invitationService.getInvitationsForMe();
    return invitationsForMe.stream().map(this::convertToDto).collect(Collectors.toList());
  }

  public List<InvitationRs> getInvitationsFromMe() {
    List<Invitation> invitationsFromMe = invitationService.getInvitationsFromMe();
    return invitationsFromMe.stream().map(this::convertToDto).collect(Collectors.toList());
  }
}

