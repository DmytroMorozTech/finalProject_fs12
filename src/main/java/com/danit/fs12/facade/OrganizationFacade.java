package com.danit.fs12.facade;

import com.danit.fs12.entity.organization.Organization;
import com.danit.fs12.entity.organization.OrganizationRq;
import com.danit.fs12.entity.organization.OrganizationRs;
import com.danit.fs12.service.OrganizationService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Component
public class OrganizationFacade extends GeneralFacade<Organization, OrganizationRq, OrganizationRs> {
  private final OrganizationService organizationService;

  public List<OrganizationRs> findOrganizationsByName(String name) {
    List<Organization> organizationsByName = organizationService.findOrganizationsByName(name);
    List<OrganizationRs> organizationRsList = organizationsByName
      .stream()
      .map(this::convertToDto)
      .collect(Collectors.toList());

    return organizationRsList;
  }

}
