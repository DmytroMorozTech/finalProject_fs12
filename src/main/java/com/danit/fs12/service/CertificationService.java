package com.danit.fs12.service;

import com.danit.fs12.entity.certification.Certification;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class CertificationService extends GeneralService<Certification> {
  private final UserRepository userRepository;
  private final Long hardCodedActiveUserId = 1L;

  public Certification createCertification(Certification certification) {
    User user = userRepository.findEntityById(hardCodedActiveUserId);
    certification.setUser(user);

    Certification savedInDbCertification = save(certification);

    user.getCertifications().add(savedInDbCertification);
    userRepository.save(user);

    return savedInDbCertification;
  }

}
