package com.danit.fs12.service;

import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface PostService {

  User getAllPostsByUserId(long id);

  public Post save(Post post);

  public void delete(Post post);

  public List<Post> findAll();

  public void deleteById(Long id);

  public Optional<Post> getOne(Long id);
}
