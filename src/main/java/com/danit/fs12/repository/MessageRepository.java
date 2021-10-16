package com.danit.fs12.repository;


import com.danit.fs12.entity.message.Message;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends RepositoryInterface<Message> {
  List<Message> findMessagesByChat_Id(Long id);
  List<Message> findMessagesByUser_Id(Long id);
}