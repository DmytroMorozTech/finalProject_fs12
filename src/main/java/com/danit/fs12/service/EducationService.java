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
  private final UserService userService;

  public Education createEducation(Education education) {
    Long activeUserId = userService.getActiveUser().getId();
    User user = userRepository.findEntityById(activeUserId);
    education.setUser(user);

    Education savedInDbEducation = save(education); // with id from db

    user.getEducations().add(savedInDbEducation);
    userRepository.save(user);

    return savedInDbEducation;
  }

  public Education updateEducation(Education education, Long id) {
    Long activeUserId = userService.getActiveUser().getId();
    User user = userRepository.findEntityById(activeUserId);
    Education educationFromDb = findEntityById(id);

    user.getEducations().remove(educationFromDb);

    education.setId(id);
    education.setUser(user);
    Education savedInDbEducation = save(education);
    user.getEducations().add(savedInDbEducation);
    userRepository.save(user);

    return savedInDbEducation;
  }

}