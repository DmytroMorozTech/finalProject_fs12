package com.danit.fs12.entity.group;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "groups")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Group extends AbstractEntity {
  private String groupName;
  @Column(length = 280)

  private String description;
  private String industry;
  private String location;
  private String rules;

  @ManyToMany(mappedBy = "groups")
  private List<User> users = new ArrayList<>();
  // this field represents the number of members in this group
  // and we can get the full list of group members
}
