package com.danit.fs12.service;

import com.danit.fs12.entity.organization.Organization;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.workplace.WorkPlace;
import com.danit.fs12.repository.OrganizationRepository;
import com.danit.fs12.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WorkPlaceService extends GeneralService<WorkPlace> {
  private final UserRepository userRepository;
  private final UserService userService;
  private final OrganizationRepository organizationRepository;

  public WorkPlace createWorkplace(WorkPlace workPlace, Long orgId) {
    Long activeUserId = userService.getActiveUser().getId();
    User user = userRepository.findEntityById(activeUserId);
    workPlace.setUser(user);

    Organization organization = organizationRepository.findEntityById(orgId);
    workPlace.setOrganization(organization);

    WorkPlace savedInDbWorkPlace = save(workPlace);

    user.getWorkPlaces().add(savedInDbWorkPlace);
    organization.getWorkPlaces().add(savedInDbWorkPlace);
    userRepository.save(user);
    organizationRepository.save(organization);

    return savedInDbWorkPlace;
  }

  // this endpoint should be refactored!
  public WorkPlace updateWorkPlace(WorkPlace workPlace, Long id) {
    Long activeUserId = userService.getActiveUser().getId();
    User user = userRepository.findEntityById(activeUserId);

    Organization organization = findEntityById(id).getOrganization();

    workPlace.setId(id);
    workPlace.setUser(user);
    workPlace.setOrganization(organization);

    return save(workPlace);
  }
}
