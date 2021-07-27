package com.danit.fs12.service;

import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface PostService {

  User getAllPostsByUserId(long id);

  Post save(Post post);

  void delete(Post post);

  List<Post> findAll();

  void deleteById(Long id);

  Post getOne(Long id);

  Optional<Post> findById(Long id);
}
