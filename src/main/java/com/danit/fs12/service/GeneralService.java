package com.danit.fs12.service;

import com.danit.fs12.entity.Post;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

@NoArgsConstructor
@AllArgsConstructor
public abstract class GeneralService<E> implements ServiceInterface {
  @Override
  public Post save(Object entity) {
    return null;
  }

  @Override
  public void delete(Object entity) {

  }

  @Override
  public List findAll() {
    return null;
  }

  @Override
  public void deleteById(Long id) {

  }

  @Override
  public Post getOne(Long id) {
    return null;
  }

  @Override
  public Optional findById(Long id) {
    return Optional.empty();
  }
}
