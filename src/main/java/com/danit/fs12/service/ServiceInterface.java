package com.danit.fs12.service;

import com.danit.fs12.entity.AbstractEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ServiceInterface<E extends AbstractEntity> {
  E save(E entity);

  void delete(E entity);

  void deleteById(Long id);

  List<E> findAll();

  Page<E> findAll(Pageable pageable);

  Optional<E> findById(Long id);

  E getOne(Long id);

  E findEntityById(Long id);

}
