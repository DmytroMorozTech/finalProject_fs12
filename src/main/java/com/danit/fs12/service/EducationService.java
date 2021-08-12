package com.danit.fs12.service;

import com.danit.fs12.entity.education.Education;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EducationService extends GeneralService<Education> {
  private final UserRepository userRepository;
  private final Long hardCodedActiveUserId = 1L;

  public Education createEducation(Education education) {
    User user = userRepository.findEntityById(hardCodedActiveUserId);
    education.setUser(user);

    Education savedInDbEducation = save(education); // with id from db

    user.getEducations().add(savedInDbEducation);
    userRepository.save(user);

    return savedInDbEducation;
  }

}