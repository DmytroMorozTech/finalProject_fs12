package com.danit.fs12.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity(name = "Post")
@Table(name = "posts")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Post extends AbstractEntity{
  private String title;
  @Column(name = "main_text", length = 280)
  private String mainText;

  @JsonIgnore
  @ManyToOne(
      cascade = {CascadeType.PERSIST})
  @JoinTable(
      name = "rel_user_posts",
      joinColumns = {
          @JoinColumn(
              name = "post_id",
              referencedColumnName = "id")
      },
      inverseJoinColumns = {
          @JoinColumn(name = "user_id",
              referencedColumnName = "id")
      })
  private User user;

  public Post(String title, String mainText) {
//    super(); // not needed
    this.title = title;
    this.mainText = mainText;
  }
}
