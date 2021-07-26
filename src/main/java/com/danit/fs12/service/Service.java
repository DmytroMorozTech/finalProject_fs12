package com.danit.fs12.service;

import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface ServiceInterface<E> {

  Post save(E entity);
  void delete(E entity);

  List<E> findAll();

  void deleteById(Long id);

  Post getOne(Long id);

  Optional<E> findById(Long id);

  public E getOne(Long id);
}
