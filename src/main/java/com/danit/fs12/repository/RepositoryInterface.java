package com.danit.fs12.repository;

import com.danit.fs12.entity.AbstractEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryInterface<E extends AbstractEntity> extends JpaRepository<E, Long> {

}
