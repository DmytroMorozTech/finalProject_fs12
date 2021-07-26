package com.danit.fs12.facade;

import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.lang.reflect.ParameterizedType;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public abstract class GeneralFacade<E, RQ_DTO, RS_DTO, REPO extends JpaRepository<E,Long>> {
  @Autowired
  private ModelMapper mm;
  private REPO repo;

  public RS_DTO convertToDto(E entity) {
    return mm.map(entity, getClassRS_DTO());
  }

  public E convertToEntity(RQ_DTO rqDto) {
    return mm.map(rqDto, getClassE());
  }

  private Class<E> getClassE() {
    return (Class<E>) ((ParameterizedType) getClass()
      .getGenericSuperclass()).getActualTypeArguments()[0];
  }

  private Class<RS_DTO> getClassRS_DTO() {
    return (Class<RS_DTO>) ((ParameterizedType) getClass()
      .getGenericSuperclass()).getActualTypeArguments()[2];
  }

  public E save(E entity) {
    return repo.save(entity);
  }

  public void delete(E entity){
    repo.delete(entity);
  }

  public List<E> findAll(){
    return repo.findAll();
  }

  public boolean deleteById(Long id){
    Optional<E> entityOpt = findById(id);
    if (entityOpt.isPresent()) {
      delete(entityOpt.get());
      return true;
    }
    return false;
  }

  public E getOne(Long id){
    return repo.getOne(id);
  }

  public Optional<E> findById(Long id) {
    return repo.findById(id);
  }



}