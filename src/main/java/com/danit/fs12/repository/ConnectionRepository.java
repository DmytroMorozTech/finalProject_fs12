package com.danit.fs12.repository;

import com.danit.fs12.entity.connection.Connection;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ConnectionRepository extends RepositoryInterface<Connection> {
  List<Connection> findConnectionsByUserWhoIdOrUserWhomId(Long userWhoId, Long userWhomId);

  void deleteConnectionByUserWhoIdAndUserWhomId(Long userWhoId, Long userWhomId);

//  List<Connection> findConnectionsByUserWhoFullNameContainingOrUserWhomFullNameContaining(String nameUserWho, String nameUserWhom);

}
