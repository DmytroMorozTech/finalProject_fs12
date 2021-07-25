package com.danit.fs12.facade;

import com.danit.fs12.dto.comment.CommentDtoRes;
import com.danit.fs12.dto.comment.CommentDtoRq;
import com.danit.fs12.entity.Comment;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class CommentFacade extends GeneralFacade<Comment, CommentDtoRq, CommentDtoRes> {

  public CommentFacade(ModelMapper mm) {
    super(mm);
  }
}

