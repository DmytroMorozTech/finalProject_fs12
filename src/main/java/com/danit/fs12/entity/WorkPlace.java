package com.danit.fs12.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

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
public class WorkPlace extends AbstractEntity {
  private String name;
  private String location;
  private String position;
  private String responsibilities;
  private LocalDate dateStart;
  private LocalDate dateFinish;

  @ManyToOne
  @JoinColumn(name = "organization_id")
  private Organization organization;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

}
