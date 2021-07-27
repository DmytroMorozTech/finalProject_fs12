package com.danit.fs12.facade;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.exception.NotFoundException;
import com.danit.fs12.service.ServiceInterface;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.lang.reflect.ParameterizedType;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public abstract class GeneralFacade<E extends AbstractEntity, RQDTO, RSDTO> {
  @Autowired
  private ModelMapper mm;

  @Autowired
  private ServiceInterface<E> service;

  public RSDTO convertToDto(E entity) {
    return mm.map(entity, getClassRS_DTO());
  }

  public E convertToEntity(RQDTO rqDto) {
    return mm.map(rqDto, getClassE());
  }

  private Class<E> getClassE() {
    return (Class<E>) ((ParameterizedType) getClass()
      .getGenericSuperclass()).getActualTypeArguments()[0];
  }

  private Class<RSDTO> getClassRS_DTO() {
    return (Class<RSDTO>) ((ParameterizedType) getClass()
      .getGenericSuperclass()).getActualTypeArguments()[2];
  }

  public E save(E entity) {
    return service.save(entity);
  }

  public void delete(E entity) {
    service.delete(entity);
  }

  public List<RSDTO> findAll() {
    List<E> entities = service.findAll();
    List<RSDTO> entitiesRs = entities.stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());
    return entitiesRs;
  }

  public void deleteById(Long id) {
    service.deleteById(id);
  }

  public E getOne(Long id) {
    return service.getOne(id);
  }

  public RSDTO findById(Long id) {
    Optional<E> entityOpt = service.findById(id);
    if (entityOpt.isEmpty()) {
      String msg = String.format("Entity with id %d was not found.", id);
      throw new NotFoundException(msg);
    }
    return convertToDto(entityOpt.get());
  }
  // our facade methods should return not E (entity), but RS_DTO type


}