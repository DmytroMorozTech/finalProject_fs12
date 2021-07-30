package com.danit.fs12.beans;

import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.post.PostRs;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserRs;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class Convertor {

  @Bean
  public ModelMapper createModelMapper() {
    ModelMapper mm = new ModelMapper();

    mm.createTypeMap(User.class, UserRs.class)
      .addMapping(User::getId, UserRs::setId)
      .addMapping(User::getPhoneNumber, UserRs::setPhoneNumber)
      .addMapping(User::getEmail, UserRs::setEmail)
      .addMapping(User::getAge, UserRs::setAge)
      .addMapping(User::getPositionAndCompany, UserRs::setPosition)
      .addMapping(User::getFullName, UserRs::setFullName);
//      .addMapping(u -> Optional.ofNullable(u)
//          .map(Person::getPhones)
//          .map(p -> p.stream()
//            .map(Phone::getNumber)
//            .collect(Collectors.joining(",")))
//          .orElse("was null :(")
//        , RsPerson::setPhones);

    mm.createTypeMap(Post.class, PostRs.class)
      .addMapping(Post::getId, PostRs::setId)
      .addMapping(p -> p.getUser().getId(), PostRs::setAuthorId) // great!
      .addMapping(Post::getText, PostRs::setText)
      .addMapping(Post::getNumberOfLikes, PostRs::setNumberOfLikes)
      .addMapping(Post::getNumberOfComments, PostRs::setNumberOfComments);
//      .addMapping(p -> p.isLikedByUser(1L), PostRs::setIsLikedByActiveUser);

    return mm;
  }
}
