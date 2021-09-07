package com.danit.fs12.repository;

import com.danit.fs12.entity.organization.Organization;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrganizationRepository extends RepositoryInterface<Organization> {
  List<Organization> findOrganizationsByNameContainingIgnoreCase(String name);
}