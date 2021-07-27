package com.danit.fs12.service;

import com.danit.fs12.entity.AbstractEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ServiceInterface<E extends AbstractEntity> {
  E save(E entity);

  void delete(E entity);

  boolean deleteById(Long id);

  List<E> findAll();

  Optional<E> findById(Long id);

  E getOne(Long id);

}
