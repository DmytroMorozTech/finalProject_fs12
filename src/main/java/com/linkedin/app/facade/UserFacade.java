package com.linkedin.app.facade;

import com.linkedin.app.dto.UserDtoReq;
import com.linkedin.app.dto.UserDtoRes;
import com.linkedin.app.entity.User;
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
