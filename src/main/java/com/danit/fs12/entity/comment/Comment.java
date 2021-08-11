package com.danit.fs12.entity.comment;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity(name = "Comment")
@Table(name = "comments")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Comment extends AbstractEntity {

  @Column(name = "text")
  private String text;

  @JsonIgnore
  @ManyToOne(
    cascade = {CascadeType.PERSIST},
    fetch = FetchType.LAZY
  )
  @JoinColumn(name="post_id")
  private Post post;

  @JsonIgnore
  @ManyToOne(
    cascade = {CascadeType.PERSIST},
    fetch = FetchType.LAZY
  )
  @JoinColumn(name="user_id")
  private User user;

}
