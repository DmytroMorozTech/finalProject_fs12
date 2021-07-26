package com.danit.fs12.service;

import com.danit.fs12.entity.Post;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
public abstract class GeneralService<T, REPO> {
  private final REPO repo;

  public abstract T save(Post post);

  public abstract void delete(T item);

  public abstract List<T> findAll();

  public abstract void deleteById(Long id);

  public abstract T getOne(Long id);

  public abstract Optional<T> findById(Long id);

}
