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
  private final UserService userService;

  public Certification createCertification(Certification certification) {
    Long activeUserId = userService.getActiveUser().getId();
    User user = userRepository.findEntityById(activeUserId);
    certification.setUser(user);

    Certification savedInDbCertification = save(certification);

    user.getCertifications().add(savedInDbCertification);
    userRepository.save(user);

    return savedInDbCertification;
  }

//  public Certification updateCertification(Certification certification, Long id) {
//    Long activeUserId = userService.getActiveUser().getId();
//    User user = userRepository.findEntityById(activeUserId);
//    Certification certificationFromDb = findEntityById(id);
//    user.getCertifications().remove(certificationFromDb);
//    certification.setId(id);
//    certification.setUser(user);
//    Certification savedCertification = save(certification);
//    user.getCertifications().add(savedCertification);
//    userRepository.save(user);
//    return savedCertification;
//  }

}
