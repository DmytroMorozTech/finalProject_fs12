package com.danit.fs12.service;

import com.danit.fs12.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

  User getActiveUser(long id);
}
