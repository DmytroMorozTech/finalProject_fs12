package com.danit.fs12.facade;

import com.danit.fs12.dto.user.UserDtoReq;
import com.danit.fs12.dto.user.UserDtoRes;
import com.danit.fs12.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class UserFacade {

  private final ModelMapper modelMapper;

  public UserFacade() {
    this.modelMapper = new ModelMapper();
  }

  public UserDtoRes convertToDto(User user) {
    return modelMapper.map(user, UserDtoRes.class);
  }

  public User convertToEntity(UserDtoReq userDtoReq) {
    return modelMapper.map(userDtoReq, User.class);
  }
}
