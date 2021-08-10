package com.danit.fs12.repository;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.exception.BadRequestException;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RepositoryInterface<E extends AbstractEntity> extends JpaRepository<E, Long> {
  default E findEntityById(Long id) {
    Optional<E> entityOptional = findById(id);
    if (entityOptional.isEmpty()) {

      String msg = String.format("An error occurred while trying to find entity with id %d. ", id);
      throw new BadRequestException(msg);
    }
    return entityOptional.get();
  }
}
