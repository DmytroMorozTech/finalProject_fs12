package com.danit.fs12.facade;

import com.danit.fs12.dto.user.UserDtoReq;
import com.danit.fs12.dto.user.UserDtoRes;
import com.danit.fs12.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserFacade extends GeneralFacade<User, UserDtoReq, UserDtoRes> {

  public UserFacade(Class<User> typeParameterE,
                    Class<UserDtoReq> typeParameterRQ_DTO,
                    Class<UserDtoRes> typeParameterRS_DTO) {
    super(typeParameterE, typeParameterRQ_DTO, typeParameterRS_DTO, null);
  }
}
