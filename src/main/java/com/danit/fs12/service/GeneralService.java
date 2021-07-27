package com.danit.fs12.service;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.repository.RepositoryInterface;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@NoArgsConstructor
@AllArgsConstructor
public abstract class GeneralService<E extends AbstractEntity> implements ServiceInterface<E> {
  @Autowired
  private RepositoryInterface<E> repo;

  @Override
  public E save(E entity) {
    return repo.save(entity);
  }

  @Override
  public void delete(E entity) {
    repo.delete(entity);
  }

  @Override
  public List<E> findAll() {
    return repo.findAll();
  }

  @Override
  public boolean deleteById(Long id) {
    Optional<E> entityOpt = findById(id);
    if (entityOpt.isPresent()) {
      delete(entityOpt.get());
      return true;
    }
    return false;
  }

  @Override
  public Optional<E> findById(Long id) {
    return repo.findById(id);
  }

  @Override
  public E getOne(Long id) {
    return repo.getOne(id);
  }
}
