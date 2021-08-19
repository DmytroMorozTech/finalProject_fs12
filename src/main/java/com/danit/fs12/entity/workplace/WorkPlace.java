package com.danit.fs12.entity.workplace;


import com.danit.fs12.controller.UserViews;
import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.organization.Organization;
import com.danit.fs12.entity.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
@Table(name = "workPlaces")
@JsonView(UserViews.Profile.class)
public class WorkPlace extends AbstractEntity {

  private String position;
  private String responsibilities;

  @Column(name = "date_start")
  private LocalDate dateStart;

  @Column(name = "date_finish")
  private LocalDate dateFinish;

  @ManyToOne
  @JoinColumn(name = "organization_id")
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private Organization organization;

  @ManyToOne
  @JoinColumn(name = "user_id")
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private User user;

  public String getPositionAndCompany() {
    return getPosition() + " at " + organization.getName();
  }

}
