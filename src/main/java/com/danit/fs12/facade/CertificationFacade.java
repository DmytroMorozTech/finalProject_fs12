package com.danit.fs12.facade;

import com.danit.fs12.entity.certification.Certification;
import com.danit.fs12.entity.certification.CertificationRq;
import com.danit.fs12.entity.certification.CertificationRs;
import com.danit.fs12.service.CertificationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class CertificationFacade extends GeneralFacade<Certification, CertificationRq, CertificationRs> {
  private final CertificationService certificationService;

  public CertificationRs createCertification(CertificationRq rq) {
    Certification certification = convertToEntity(rq);
    Certification savedCertification = certificationService.createCertification(certification);
    return convertToDto(savedCertification);
  }

}

