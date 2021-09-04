package com.danit.fs12.facade;

import com.danit.fs12.entity.invitation.Invitation;
import com.danit.fs12.entity.invitation.InvitationRq;
import com.danit.fs12.entity.invitation.InvitationRs;
import com.danit.fs12.service.InvitationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

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

}

