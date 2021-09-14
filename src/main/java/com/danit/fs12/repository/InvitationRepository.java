package com.danit.fs12.repository;

import com.danit.fs12.entity.invitation.Invitation;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InvitationRepository extends RepositoryInterface<Invitation> {
  List<Invitation> findInvitationsByUserWhomId(Long id);

  List<Invitation> findInvitationsByUserWhoId(Long id);
}
