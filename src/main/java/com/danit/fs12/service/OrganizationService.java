package com.danit.fs12.service;

import com.danit.fs12.entity.organization.Organization;
import com.danit.fs12.repository.OrganizationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrganizationService extends GeneralService<Organization> {
  private final OrganizationRepository organizationRepository;

  public List<Organization> findOrganizationsByName(String name) {
    return organizationRepository.findOrganizationsByNameContainingIgnoreCase(name);
  }

}