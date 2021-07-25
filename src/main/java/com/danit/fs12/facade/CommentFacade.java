package com.danit.fs12.facade;

import com.danit.fs12.dto.comment.CommentDtoRq;
import com.danit.fs12.dto.comment.CommentDtoRs;
import com.danit.fs12.entity.Comment;
import org.springframework.stereotype.Component;

@Component
public class CommentFacade extends GeneralFacade<Comment, CommentDtoRq, CommentDtoRs> {

}

