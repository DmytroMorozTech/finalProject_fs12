package com.danit.fs12.facade;

import com.danit.fs12.entity.education.Education;
import com.danit.fs12.entity.education.EducationRq;
import com.danit.fs12.entity.education.EducationRs;
import com.danit.fs12.service.EducationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@AllArgsConstructor
@Component
public class EducationFacade extends GeneralFacade<Education, EducationRq, EducationRs> {
  private final EducationService educationService;

  public EducationRs createEducation(EducationRq rq) {
    Education education = convertToEntity(rq);
    Education savedEducation = educationService.createEducation(education);
    return convertToDto(savedEducation);
  }

}
