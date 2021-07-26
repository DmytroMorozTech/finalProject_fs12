package com.danit.fs12.service;

import java.util.List;
import java.util.Optional;

public interface ServiceInterface<E> {
  E save(E entity);

  void delete(E entity);

  boolean deleteById(Long id);

  List<E> findAll();

  Optional<E> findById(Long id);

  E getOne(Long id);

}
