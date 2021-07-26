package com.danit.fs12.repository;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryInterface<E> extends JpaRepository<E, Long> {

}
