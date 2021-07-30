package com.danit.fs12.facade;

import com.danit.fs12.entity.user.UserRq;
import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.entity.user.User;
import org.springframework.stereotype.Component;

@Component
public class UserFacade extends GeneralFacade<User, UserRq, UserRs> {

}
