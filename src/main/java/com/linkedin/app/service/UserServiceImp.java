package com.linkedin.app.service;

import com.linkedin.app.entity.User;
import com.linkedin.app.exception.NoSuchUserException;
import com.linkedin.app.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.awt.font.OpenType;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;

    @Override
    public User getActiveUser(long id) {

        //temporary to test
        User user = new User(1, "Gianluigi", "Donnarumma", "gian_donna@gmail.com", "393290233725", 22, "gianni", "secret");
        userRepository.save(user);

        Optional<User> activeUser = userRepository.findById(id);
        if (activeUser.isPresent()) {
            return activeUser.get();
        } else throw new NoSuchUserException("User with id= " + " doesn't exist!");
    }
}
