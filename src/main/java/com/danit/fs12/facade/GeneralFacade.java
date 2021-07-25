package com.danit.fs12.facade;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.lang.reflect.ParameterizedType;

@AllArgsConstructor
@Data
@Component
public abstract class GeneralFacade<E, RQ_DTO, RS_DTO> {
  private final ModelMapper mm;

  public RS_DTO convertToDto(E entity) {
    return mm.map(entity, getClassRS_DTO());
  }

  public E convertToEntity(RQ_DTO rqDto) {
    return mm.map(rqDto, getClassE());
  }

  public Class<E> getClassE() {
    return (Class<E>) ((ParameterizedType) getClass()
      .getGenericSuperclass()).getActualTypeArguments()[0];
  }

  public Class<RS_DTO> getClassRS_DTO() {
    return (Class<RS_DTO>) ((ParameterizedType) getClass()
      .getGenericSuperclass()).getActualTypeArguments()[2];
  }


}

// we pass to Abstract class 3 Type parameters: entity, incomingDto, outgoingDto
