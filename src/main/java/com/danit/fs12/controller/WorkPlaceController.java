package com.danit.fs12.controller;

import com.danit.fs12.entity.workplace.WorkPlaceRq;
import com.danit.fs12.entity.workplace.WorkPlaceRs;
import com.danit.fs12.facade.WorkPlaceFacade;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/work-places")
public class WorkPlaceController {
  private final WorkPlaceFacade workPlaceFacade;

  @PostMapping(path = "{orgId}")
  @JsonView(UserViews.Profile.class)
  public ResponseEntity<WorkPlaceRs> createWorkPlace(@Valid @RequestBody WorkPlaceRq rq,
                                                     @PathVariable Long orgId) {
    WorkPlaceRs workPlace = workPlaceFacade.createWorkPlace(rq, orgId);
    return ResponseEntity.ok(workPlace);
  }

  @PutMapping(path = "{workPlaceId}")
  @JsonView(UserViews.Profile.class)
  public ResponseEntity<WorkPlaceRs> updateWorkPlace(@Valid @RequestBody WorkPlaceRq rq,
                                                     @PathVariable Long workPlaceId) {
    WorkPlaceRs workPlace = workPlaceFacade.updateWorkPlace(rq, workPlaceId);
    return ResponseEntity.ok(workPlace);
  }

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    workPlaceFacade.deleteById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }
}
