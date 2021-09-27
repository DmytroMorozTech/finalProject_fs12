package com.danit.fs12.repository;

import com.danit.fs12.entity.post.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends RepositoryInterface<Post> {

  @Query( "select p from Post p where p.user.id in :ids" )
  List<Post> getAllPostsForActiveUser(@Param("ids") List<Long> ids);

  @Query( "select p from Post p where p.user.id in :ids" )
  Page<Post> getPostsForActiveUserPaginated(@Param("ids") List<Long> ids, Pageable pageable);

}
