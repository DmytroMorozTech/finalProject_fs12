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

@Entity(name = "CommentEntity")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CommentEntity extends AbstractEntity {

  @Column(name = "id")
  private long id;

  @Column(name="text")
  private String text;

  @Column(name="date_time")
  private String dateTime;

  @Column(name="post_id")
  private String postId;

//  @JsonIgnore
//  @ManyToOne(
//      cascade = {CascadeType.PERSIST}
//  )
//  @JoinTable(
//      name = "post_comments",
//      joinColumns = {
//          @JoinColumn(
//              name = "comment_id", // как будет называться колонка в link table
//              referencedColumnName = "id") // от куда мы берем ИД для текущей сущности (Comments)
//      },
//      inverseJoinColumns = {
//          @JoinColumn(name = "post_id",
//              referencedColumnName = "id")// от куда мы берем ИД в усщности user
//      }
//  )
//  private Post post;
}
