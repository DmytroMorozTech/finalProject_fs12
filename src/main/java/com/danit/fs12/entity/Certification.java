package com.danit.fs12.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "certifications")
public class Certification extends AbstractEntity {
  private String name;

  @Column(name = "issuing_organization")
  private String issuingOrganization;

  @Column(name = "has_expiry_date")
  private Boolean hasExpiryDate;

  @Column(name = "issue_date")
  private LocalDate issueDate;

  @Column(name = "expiration_date")
  private LocalDate expirationDate;

  @Column(name = "credential_id")
  private String credentialId;

  @Column(name = "credential_url")
  private String credentialUrl;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

}