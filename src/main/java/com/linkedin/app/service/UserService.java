package com.linkedin.app.service;

import com.linkedin.app.entity.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {

    public User getActiveUser(long id);
}
