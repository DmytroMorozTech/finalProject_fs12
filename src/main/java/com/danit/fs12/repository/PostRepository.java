package com.danit.fs12.repository;

import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

  public User getAllPostsByUserId(long id);

}
