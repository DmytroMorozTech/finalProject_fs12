package com.danit.fs12.service;

import com.danit.fs12.entity.organization.Organization;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.workplace.WorkPlace;
import com.danit.fs12.repository.OrganizationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WorkPlaceService extends GeneralService<WorkPlace> {
  private final UserService userService;
  private final OrganizationRepository organizationRepository;

  public WorkPlace createWorkplace(WorkPlace workPlace, Long orgId) {
    User activeUser = userService.getActiveUser();
    workPlace.setUser(activeUser);

    Organization organization = organizationRepository.findEntityById(orgId);
    workPlace.setOrganization(organization);

    WorkPlace savedInDbWorkPlace = save(workPlace);

    activeUser.getWorkPlaces().add(savedInDbWorkPlace);
    organization.getWorkPlaces().add(savedInDbWorkPlace);
    userService.save(activeUser);
    organizationRepository.save(organization);

    return savedInDbWorkPlace;
  }

  public WorkPlace updateWorkPlace(WorkPlace workPlace, Long id) {
    User activeUser = userService.getActiveUser();
    Organization organization = findEntityById(id).getOrganization();

    workPlace.setId(id);
    workPlace.setUser(activeUser);
    workPlace.setOrganization(organization);

    return save(workPlace);
  }
}
