package com.danit.fs12.facade;

import com.danit.fs12.entity.workplace.WorkPlace;
import com.danit.fs12.entity.workplace.WorkPlaceRq;
import com.danit.fs12.entity.workplace.WorkPlaceRs;
import com.danit.fs12.service.WorkPlaceService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class WorkPlaceFacade extends GeneralFacade<WorkPlace, WorkPlaceRq, WorkPlaceRs> {
  private final WorkPlaceService workPlaceService;

  public WorkPlaceRs createWorkPlace(WorkPlaceRq rq, Long orgId) {
    WorkPlace workPlace = convertToEntity(rq);
    WorkPlace savedWorkPlace = workPlaceService.createWorkplace(workPlace, orgId);
    return convertToDto(savedWorkPlace);
  }

  public WorkPlaceRs updateWorkPlace(WorkPlaceRq rq, Long id) {
    WorkPlace workPlace = convertToEntity(rq);
    WorkPlace updatedWorkPlace = workPlaceService.updateWorkPlace(workPlace, id);
    return convertToDto(updatedWorkPlace);
  }
}
