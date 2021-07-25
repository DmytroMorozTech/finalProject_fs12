package com.danit.fs12.facade;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Data
@Component
public abstract class GeneralFacade<E, RQ_DTO, RS_DTO> {
  private final Class<E> typeParameterE;
  private final Class<RQ_DTO> typeParameterRQ_DTO;
  private final Class<RS_DTO> typeParameterRS_DTO;
  private final ModelMapper mm;

  public RS_DTO convertToDto(E entity) {
    return mm.map(entity, typeParameterRS_DTO);
  }

  public E convertToEntity(RQ_DTO rqDto) {
    return mm.map(rqDto, typeParameterE);
  }

}

// we pass to Abstract class 3 Type parameters: entity, incomingDto, outgoingDto
