package com.danit.fs12.service;

import java.util.*;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.education.Education;
import com.danit.fs12.repository.EducationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EducationService extends GeneralService<Education> {
    private final EducationRepository educationRepository;

    public Education fillEducation(Education incomingInfo) {
        Education education = educationRepository.findEntityById(id);
        incomingInfo.setUser(user);
        Education education = save(incomingInfo);
        user.getEducation().add(education);
        educationRepository.save(user);
        return education;
    }
}