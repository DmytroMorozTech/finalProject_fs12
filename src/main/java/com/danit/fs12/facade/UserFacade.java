package com.danit.fs12.facade;

import com.danit.fs12.dto.user.UserDtoRq;
import com.danit.fs12.dto.user.UserDtoRs;
import com.danit.fs12.entity.User;
import com.danit.fs12.service.UserService;
import org.springframework.stereotype.Component;

@Component
public class UserFacade extends GeneralFacade<User, UserDtoRq, UserDtoRs, UserService> {

}
