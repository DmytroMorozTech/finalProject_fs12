package com.danit.fs12.service;

import com.danit.fs12.entity.invitation.Invitation;
import com.danit.fs12.entity.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InvitationService extends GeneralService<Invitation> {
  private final UserService userService;

  public Invitation createInvitation(Invitation invitation, Long userWhomId) {
    System.out.println("**************************************");
    System.out.println("We are in InvitationService:");
    System.out.println("**************************************");
    System.out.println("userWhomId: " + userWhomId);
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

}
