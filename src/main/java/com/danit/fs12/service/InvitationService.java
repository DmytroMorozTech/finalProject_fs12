package com.danit.fs12.service;

import com.danit.fs12.entity.invitation.Invitation;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.exception.BadRequestException;
import com.danit.fs12.repository.InvitationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InvitationService extends GeneralService<Invitation> {
  private final UserService userService;
  private final InvitationRepository invitationRepository;
  private final ConnectionService connectionService;

  public Invitation createInvitation(Invitation invitation, Long userWhomId) {
    User activeUser = userService.getActiveUser();
    User userWhom = userService.findEntityById(userWhomId);
    invitation.setUserWho(activeUser);
    invitation.setUserWhom(userWhom);
    invitation.setText(invitation.getText());
    if (activeUser.getId().equals(userWhomId)) {
      throw new BadRequestException("User can not create invitation for himself.");
    }

    return save(invitation);
  }

  public void acceptInvitation(Long id) {
    Invitation invitation = findEntityById(id);
    Long userWhoInvitedId = invitation.getUserWho().getId();
    connectionService.createConnection(userWhoInvitedId);
    delete(invitation);
  }

  public List<Invitation> getInvitationsForMe() {
    Long activeUserId = userService.getActiveUser().getId();
    return invitationRepository.findInvitationsByUserWhomId(activeUserId);
  }

  public List<Invitation> getInvitationsFromMe() {
    Long activeUserId = userService.getActiveUser().getId();
    return invitationRepository.findInvitationsByUserWhoId(activeUserId);
  }
}
