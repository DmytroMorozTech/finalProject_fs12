package com.danit.fs12.facade;

import com.danit.fs12.dto.Convertor;
import com.danit.fs12.dto.user.UserDtoReq;
import com.danit.fs12.dto.user.UserDtoRes;
import com.danit.fs12.entity.User;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class GenericsFacade {

  private final Convertor convertor;
//
//  public GenericsFacade() {
//    this.modelMapper = new ModelMapper();
//  }
//
//  public UserDtoRes convertToDto(User user) {
//    return modelMapper.map(user, UserDtoRes.class);
//  }
//
//  public User convertToEntity(UserDtoReq userDtoReq) {
//    return modelMapper.map(userDtoReq, User.class);
//  }
}
