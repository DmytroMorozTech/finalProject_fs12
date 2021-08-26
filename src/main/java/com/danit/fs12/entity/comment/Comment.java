package com.danit.fs12.entity.comment;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.commentLike.CommentLike;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity(name = "Comment")
@Table(name = "comments")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Comment extends AbstractEntity {

  @Column(name = "text", length = 1250)
  private String text;

  @JsonIgnore
  @ManyToOne(
    cascade = {CascadeType.PERSIST},
    fetch = FetchType.LAZY
  )
  @JoinColumn(name = "post_id")
  private Post post;

  @JsonIgnore
  @ManyToOne(
    cascade = {CascadeType.PERSIST},
    fetch = FetchType.LAZY
  )
  @JoinColumn(name = "user_id")
  private User user;

  @OneToMany(
    mappedBy = "comment",
    cascade = CascadeType.ALL,
    orphanRemoval = true
  )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<CommentLike> commentLikes = new ArrayList<>();

  public Long getNumberOfLikes() {
    return (long) commentLikes.size();
  }

  public Boolean getIsLikedByActiveUser() {
    return commentLikes.stream().anyMatch(cl -> Objects.equals(cl.getUser().getId(), 1L));
  }
}
