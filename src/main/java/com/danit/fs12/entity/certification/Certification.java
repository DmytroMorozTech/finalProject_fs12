package com.danit.fs12.entity.certification;

import com.danit.fs12.controller.UserViews;
import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
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
@JsonView(UserViews.Profile.class)
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
  @JsonIgnore
  @JoinColumn(name = "user_id")
  private User user;

}