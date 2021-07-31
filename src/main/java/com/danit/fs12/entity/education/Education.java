package com.danit.fs12.entity.education;


import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.user.User;
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
@Table(name = "educations")
public class Education extends AbstractEntity {
  private String school;
  private String degree;
  private String activities; // example: Marching Band, Volleyball, Choir
  private String description;

  @Column(name = "field_of_study")
  private String fieldOfStudy;

  @Column(name = "date_start")
  private LocalDate dateStart;

  @Column(name = "date_finish")
  private LocalDate dateFinish;

  @ManyToOne
  @JoinColumn(name = "user_id")
  private User user;

}