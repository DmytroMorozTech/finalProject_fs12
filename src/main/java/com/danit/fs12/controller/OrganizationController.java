package com.danit.fs12.controller;

import com.danit.fs12.controller.views.UserViews;
import com.danit.fs12.entity.organization.OrganizationRs;
import com.danit.fs12.facade.OrganizationFacade;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/organizations")
public class OrganizationController {
  private final OrganizationFacade organizationFacade;

  @JsonView(UserViews.Profile.class)
  @GetMapping(path = "{name}")
  public ResponseEntity<List<OrganizationRs>> findById(@PathVariable String name) {
    List<OrganizationRs> foundOrganizations = organizationFacade.findOrganizationsByName(name);
    return ResponseEntity.ok(foundOrganizations);
  }

}
