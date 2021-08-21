package com.danit.fs12.controller;

import com.danit.fs12.entity.education.EducationRq;
import com.danit.fs12.entity.education.EducationRs;
import com.danit.fs12.facade.EducationFacade;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/educations")
public class EducationController {
  private final EducationFacade educationFacade;

  @GetMapping
  List<EducationRs> findAll() {
    return educationFacade.findAll();
  }

  @GetMapping(path = "{id}")
  public ResponseEntity<EducationRs> findById(@PathVariable Long id) {
    EducationRs education = educationFacade.findById(id);
    return ResponseEntity.ok(education);
  }

  @PostMapping
  @JsonView(UserViews.Profile.class)
  public ResponseEntity<EducationRs> createEducation(@Valid @RequestBody EducationRq rq) {
    EducationRs education = educationFacade.createEducation(rq);
    return ResponseEntity.ok(education);
  }

  @PutMapping(path = "{id}")
  @JsonView(UserViews.Profile.class)
  public ResponseEntity<EducationRs> updateEducation(@Valid @RequestBody EducationRq rq,
                                                     @PathVariable Long id) {
    EducationRs education = educationFacade.updateEducation(rq, id);
    return ResponseEntity.ok(education);
  }

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    educationFacade.deleteById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }
}
