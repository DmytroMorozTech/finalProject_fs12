package com.danit.fs12.controller;

import com.danit.fs12.entity.certification.CertificationRq;
import com.danit.fs12.entity.certification.CertificationRs;
import com.danit.fs12.facade.CertificationFacade;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@Slf4j
@RestController
@RequestMapping(path = "/api/certifications")
@RequiredArgsConstructor
public class CertificationController {
  private final CertificationFacade certificationFacade;

  @GetMapping
  List<CertificationRs> findAll() {
    return certificationFacade.findAll();
  }

  @GetMapping(path = "{id}")
  public ResponseEntity<CertificationRs> findById(@PathVariable Long id) {
    CertificationRs certification = certificationFacade.findById(id);
    return ResponseEntity.ok(certification);
  }

  @PostMapping
  public ResponseEntity<CertificationRs> createCertification(@Valid @RequestBody CertificationRq rq) {
    CertificationRs certification = certificationFacade.createCertification(rq);
    return ResponseEntity.ok(certification);
  }

}
