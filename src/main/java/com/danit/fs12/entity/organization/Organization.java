package com.danit.fs12.entity.organization;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.workplace.WorkPlace;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "organizations")
public class Organization extends AbstractEntity {
  private String name;
  private String location;
  private String email;
  private String industry;
  private String specialities;
  // sample of data for this field: Video Games, Games as a Service, Console Games, PC Games, Mobile Games

  @Column(name = "web_site")
  private String webSite;

  @Column(name = "founded_in_year")
  private Integer foundedInYear;

  @Column(name = "number_of_employees")
  private Integer numberOfEmployees; // company Size (this is represented so on LinkedIn page UI)

  @Column(name = "phone_number")
  private String phoneNumber;

  @JsonIgnore
  @OneToMany(mappedBy = "organization", cascade = {CascadeType.PERSIST})
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<WorkPlace> workPlaces = new ArrayList<>();

//  @ManyToOne
//  @JoinColumn(name = "user_id")
//  @ToString.Exclude
//  @EqualsAndHashCode.Exclude
//  @JsonIgnore
//  private User user;
}
