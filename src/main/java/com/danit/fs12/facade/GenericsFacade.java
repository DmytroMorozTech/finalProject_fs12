package com.danit.fs12.facade;

import com.danit.fs12.dto.user.UserDtoReq;
import com.danit.fs12.dto.user.UserDtoRes;
import com.danit.fs12.entity.User;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.Map;

@RequiredArgsConstructor
@Component
public class GenericsFacade<T> {

  private final ModelMapper mm;

  private final Map<String, String> conversionMapping = Map.ofEntries(
      Map.entry("User", "UserDtoRes"), // convertToDto
      Map.entry("UserDtoReq", "User"), // convertToEntity
      Map.entry("Message", "MessageDtoRes"),
      Map.entry("MessageDtoReq", "Message"),
      Map.entry("Comment", "CommentDtoRes"),
      Map.entry("CommentDtoReq", "Comment")
  );

  public UserDtoRes convertToDto(T param) {
    //    System.out.println(getGenericName());
    getDestinationTypeStr(param);
    return mm.map(param, UserDtoRes.class);
  }

  public User convertToEntity(UserDtoReq userDtoReq) {
    return mm.map(userDtoReq, User.class);
  } // this one should be changed

  private Class<?> getDestinationTypeStr(T param) {
    String incomingClassName = param.getClass().getSimpleName();
    System.out.println(incomingClassName);

    String resultingClassName = conversionMapping.get(incomingClassName);
    System.out.println(resultingClassName);

    try {
      Class<?> resultingClass = Class.forName(resultingClassName); // here I should review code
      System.out.println(resultingClass);
      return resultingClass;
    } catch (ClassNotFoundException e) {
      e.printStackTrace();
    }

    return null;
  }
}
