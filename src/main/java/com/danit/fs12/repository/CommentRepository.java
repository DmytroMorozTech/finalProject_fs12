package com.danit.fs12.repository;

import com.danit.fs12.entity.comment.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends RepositoryInterface<Comment> {

  Page<Comment> findCommentsByPostId(Long postId, Pageable pageable);

}
