package com.danit.fs12.service;

import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import com.danit.fs12.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PostServiceImp implements Service {

  private final PostRepository postRepository;

  @Override
  public User getAllPostsByUserId(long id) {
    return postRepository.getAllPostsByUserId(id);
  }

  @Override
  public Post save(Post post) {
    return postRepository.save(post);
  }

  @Override
  public void delete(Post post) {
    postRepository.delete(post);
  }

  @Override
  public List<Post> findAll() {
    return postRepository.findAll();
  }

  @Override
  public void deleteById(Long id) {
    postRepository.deleteById(id);
  }

  @Override
  public Post getOne(Long id) {
    return postRepository.getOne(id);
  }

  @Override
  public Optional<Post> findById(Long id) {
    return postRepository.findById(id);
  }
}
