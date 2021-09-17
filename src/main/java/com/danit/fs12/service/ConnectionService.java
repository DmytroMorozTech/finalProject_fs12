package com.danit.fs12.service;

import com.danit.fs12.entity.connection.Connection;
import com.danit.fs12.entity.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ConnectionService extends GeneralService<Connection> {
  private final UserService userService;

  public Connection createConnection(Long userWhoInvitedId) {
    User userWhoInvited = userService.findEntityById(userWhoInvitedId);
    User activeUser = userService.getActiveUser();
    Connection savedInDbConnection = save(new Connection(userWhoInvited, activeUser));
    System.out.println("savedInDbConnection:");
    System.out.println(savedInDbConnection);

    activeUser.getConnections().add(savedInDbConnection);
//    userWhoInvited.getConnections().add(savedInDbConnection);
    userService.save(activeUser);
//    userService.save(userWhoInvited);

    return savedInDbConnection;
  }

}
