package com.danit.fs12.facade;

import com.danit.fs12.dto.comment.CommentDtoRes;
import com.danit.fs12.entity.Comment;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class CommentFacade {

  private final ModelMapper modelMapper;

  public CommentFacade() {
    this.modelMapper = new ModelMapper();
  }

  public CommentDtoRes convertToDto(Comment comment) {
    return modelMapper.map(comment, CommentDtoRes.class);
  }

  public Comment convertToEntity(CommentDtoRes commentDtoRes) {
    return modelMapper.map(commentDtoRes, Comment.class);
  }
}
