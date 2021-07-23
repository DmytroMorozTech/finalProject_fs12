package com.danit.fs12.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.util.Date;

@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@NoArgsConstructor
@AllArgsConstructor
@Data
public abstract class AbstractEntityWithoutId {

  @Column(name = "created_date", updatable = false)
  @CreatedDate
  private Date createdDate;

  @Column(name = "modified_date")
  @LastModifiedDate
  private Date lastModifiedDate;
}
