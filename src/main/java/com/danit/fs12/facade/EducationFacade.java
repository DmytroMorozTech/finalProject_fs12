package com.danit.fs12.facade;

import com.danit.fs12.entity.education.Education;
import com.danit.fs12.service.EducationService;
import com.danit.fs12.controller.EducationController;
import com.danit.fs12.entity.education.EducationRq;
import com.danit.fs12.entity.education.EducationRs;
import org.springframework.stereotype.Component;
import lombok.AllArgsConstructor;


import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class EducationFacade extends GeneralFacade<EducationRs, Education, EducationRq> {
    private final EducationService educationService;

    public EducationRs fillEducationInfo(EducationRq rq) {
        Education education = educationService.fillEducationInf(convertToEntity(rq));
        return convertToDto(education);
    }
}
