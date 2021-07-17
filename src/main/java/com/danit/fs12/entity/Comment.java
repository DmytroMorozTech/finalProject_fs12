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
import java.time.LocalDateTime;

@Entity(name = "Comment")
@Table(name = "comments")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Comment extends AbstractEntity {

  @Column(name = "text")
  private String text;

  @Column(name = "created_at")
  private LocalDateTime createdAt;

  @JsonIgnore
  @ManyToOne(
      cascade = {CascadeType.PERSIST})
  @JoinTable(
      name = "rel_post_comments",
      joinColumns = {
          @JoinColumn(
              name = "comment_id",
              referencedColumnName = "id")
      },
      inverseJoinColumns = {
          @JoinColumn(name = "post_id",
              referencedColumnName = "id")
      })
  private Post post;

  @JsonIgnore
  @ManyToOne(
      cascade = {CascadeType.PERSIST})
  @JoinTable(
      name = "rel_user_comments",
      joinColumns = {
          @JoinColumn(
              name = "comment_id", // name of column in link table
              referencedColumnName = "id") // id for this entity (Comments)
      },
      inverseJoinColumns = {
          @JoinColumn(name = "user_id",
              referencedColumnName = "id")// id for entity post
      })

  private User user;
}
