package com.danit.fs12.beans;

import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.post.PostRq;
import com.danit.fs12.entity.post.PostRs;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserRs;
import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
public class Convertor {

  @Bean
  public ModelMapper createModelMapper() {
    ModelMapper mm = new ModelMapper();

    mm.getConfiguration()
      .setMatchingStrategy(MatchingStrategies.STRICT)
      .setFieldMatchingEnabled(true)
      .setSkipNullEnabled(true)
      .setFieldAccessLevel(Configuration.AccessLevel.PRIVATE);

    mm.createTypeMap(User.class, UserRs.class)
      .addMapping(User::getId, UserRs::setId)
      .addMapping(User::getPhoneNumber, UserRs::setPhoneNumber)
      .addMapping(User::getEmail, UserRs::setEmail)
      .addMapping(User::getAge, UserRs::setAge)
      .addMapping(User::getPositionAndCompany, UserRs::setPosition)
      .addMapping(User::getFullName, UserRs::setFullName);

    mm.createTypeMap(Post.class, PostRs.class)
      .addMapping(Post::getId, PostRs::setId)
      .addMapping(p -> p.getUser().getId(), PostRs::setAuthorId)
      .addMapping(Post::getText, PostRs::setText)
      .addMapping(Post::getNumberOfLikes, PostRs::setNumberOfLikes)
      .addMapping(Post::getNumberOfComments, PostRs::setNumberOfComments)
      .addMapping(Post::getCreatedDate, PostRs::setCreatedDate)
      .addMapping(Post::getLastModifiedDate, PostRs::setLastModifiedDate);
//      .addMapping(
//        p -> p.isLikedByUserId(1L),
//        PostRs::setIsLikedByActiveUser
//      );

    mm.createTypeMap(PostRq.class, Post.class)
      .addMapping(PostRq::getText, Post::setText);

    return mm;
  }
}
