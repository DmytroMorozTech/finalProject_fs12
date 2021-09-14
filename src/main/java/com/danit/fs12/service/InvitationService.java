package com.danit.fs12.service;

import com.danit.fs12.entity.invitation.Invitation;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.InvitationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InvitationService extends GeneralService<Invitation> {
  private final UserService userService;
  private final InvitationRepository invitationRepository;

  public Invitation createInvitation(Invitation invitation, Long userWhomId) {
    User activeUser = userService.getActiveUser();
    User userWhom = userService.findEntityById(userWhomId);
    invitation.setUserWho(activeUser);
    invitation.setUserWhom(userWhom);
    invitation.setText(invitation.getText());

    Invitation savedInDbInvitation = save(invitation);

    //    activeUser.getInvitations().add(savedInDbInvitation);
    //    userWhom.getInvitations().add(savedInDbInvitation);
    //    userService.save(activeUser);
    //    userService.save(userWhom);

    return savedInDbInvitation;
    // User should not be able to invite HIMSELF! And we should check that!
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
