package com.danit.fs12.facade;

import com.danit.fs12.entity.connection.Connection;
import com.danit.fs12.entity.connection.ConnectionRq;
import com.danit.fs12.entity.connection.ConnectionRs;
import com.danit.fs12.service.ConnectionService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class ConnectionFacade extends GeneralFacade<Connection, ConnectionRq, ConnectionRs> {
  private final ConnectionService connectionService;

  public void deleteByUserIds(Long activeUserId, Long userWhomId) {
    connectionService.deleteConnection(activeUserId, userWhomId);
  }

//  public List<ConnectionRs> findConnectionsByName(String name) {
//    List<Connection> connectionsByName = connectionService.findConnectionsByName(name);
//    List<ConnectionRs> connectionRsList = connectionsByName
//      .stream()
//      .map(this::convertToDto)
//      .collect(Collectors.toList());
//
//    return connectionRsList;
//  }
}

