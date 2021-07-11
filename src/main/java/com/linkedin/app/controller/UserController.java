package com.linkedin.app.controller;

import com.linkedin.app.dto.UserDtoRes;
import com.linkedin.app.entity.User;
import com.linkedin.app.facade.UserFacade;
import com.linkedin.app.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserFacade userFacade;

    @GetMapping("/users/current")
    public UserDtoRes getActiveUser() {

        // temporary active user id is hardcoded, when we realize "login" it will be changed;
        long activeUserId = 1;
        UserDtoRes activeUser = userFacade.convertToDto(userService.getActiveUser(activeUserId));
        log.info("Active user: " + activeUser.getLogin());
        return activeUser;
    }
}
