package com.danit.fs12.repository;


import com.danit.fs12.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
  Optional <Message> findMessagesByTextMessage ();
}