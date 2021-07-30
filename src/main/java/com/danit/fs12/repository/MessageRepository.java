package com.danit.fs12.repository;


import com.danit.fs12.entity.message.Message;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends RepositoryInterface<Message> {

}