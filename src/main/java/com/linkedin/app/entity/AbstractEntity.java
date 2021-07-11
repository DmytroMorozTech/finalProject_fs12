package com.linkedin.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.MappedSuperclass;
import java.util.Date;

@MappedSuperclass
@NoArgsConstructor
@AllArgsConstructor
@Data
public abstract class AbstractEntity {

    private long id;
    private Date createdDate;
    private Date lastModifiedDate;

}
