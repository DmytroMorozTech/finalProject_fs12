package com.danit.fs12.service;

import com.danit.fs12.entity.connection.Connection;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.ConnectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConnectionService extends GeneralService<Connection> {
  private final UserService userService;
  private final ConnectionRepository connectionRepository;

  public Connection createConnection(Long userWhoInvitedId) {
    User userWhoInvited = userService.findEntityById(userWhoInvitedId);
    User activeUser = userService.getActiveUser();
    Connection connection = new Connection(userWhoInvited, activeUser);

    userWhoInvited.getUsersFollowing().add(activeUser);
    activeUser.getUsersFollowing().add(userWhoInvited);

    return save(connection);
  }

  public void deleteConnection(Long userWhoId, Long userWhomId) {
    connectionRepository.deleteConnectionByUserWhoIdAndUserWhomId(userWhoId, userWhomId);
    connectionRepository.deleteConnectionByUserWhoIdAndUserWhomId(userWhomId, userWhoId);
  }

}
