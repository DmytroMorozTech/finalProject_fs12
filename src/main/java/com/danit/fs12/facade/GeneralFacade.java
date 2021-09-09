package com.danit.fs12.facade;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.service.ServiceInterface;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.lang.reflect.ParameterizedType;
import java.util.List;
import java.util.stream.Collectors;

/**
 * parameter types: E - entity, I - input (request DTO), O - output (response DTO)
 */
@AllArgsConstructor
@NoArgsConstructor
@Data
@Component
public abstract class GeneralFacade<E extends AbstractEntity, I, O> {

  @Autowired
  private ModelMapper mm;

  @Autowired
  private ServiceInterface<E> service;

  public O convertToDto(E entity) {
    return mm.map(entity, getClassO());
  }

  public E convertToEntity(I rqDto) {
    return mm.map(rqDto, getClassE());
  }

  private Class<E> getClassE() {
    return (Class<E>) ((ParameterizedType) getClass()
      .getGenericSuperclass()).getActualTypeArguments()[0];
  }

  private Class<O> getClassO() {
    return (Class<O>) ((ParameterizedType) getClass()
      .getGenericSuperclass()).getActualTypeArguments()[2];
  }

  public O save(E entity) {
    return convertToDto(service.save(entity));
  }

  public void delete(E entity) {
    service.delete(entity);
  }

  public List<O> findAll() {
    List<E> entities = service.findAll();
    List<O> entitiesRs = entities.stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());
    return entitiesRs;
  }

  public void deleteById(Long id) {
    service.deleteById(id);
  }

  public O findById(Long id) {
    return convertToDto(service.findEntityById(id));
  }

}