package com.danit.fs12.entity.post;

import com.danit.fs12.entity.AbstractEntity;
import com.danit.fs12.entity.bookmark.Bookmark;
import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.like.Like;
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
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "posts")
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Post extends AbstractEntity {
  @Column(length = 3000)
  private String text;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(
    name = "user_id",
    nullable = false,
    referencedColumnName = "id",
    foreignKey = @ForeignKey(
      name = "user_post_fk"
    ))
  private User user;

  @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  private List<Comment> comments = new ArrayList<>();

  @OneToMany(
    mappedBy = "post",
    cascade = CascadeType.ALL,
    orphanRemoval = true
    )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Like> likes = new ArrayList<>();

  @OneToMany(
    mappedBy = "post",
    cascade = CascadeType.ALL,
    orphanRemoval = true
    )
  @ToString.Exclude
  @EqualsAndHashCode.Exclude
  @JsonIgnore
  private List<Bookmark> bookmarks = new ArrayList<>();

  public Post(String text) {
    this.text = text;
  }

  public Long getNumberOfLikes() {
    return (long) likes.size();
  }

  public Long getNumberOfComments() {
    return (long) comments.size();
  }

  public Boolean getIsLikedByActiveUser() {
    return likes.stream().anyMatch(l -> Objects.equals(l.getUser().getId(), 1L));
  }

  public Boolean getIsBookmarkedByActiveUser() {
    return bookmarks.stream()
      .anyMatch(bookmark -> Objects.equals(bookmark.getUser().getId(), 1L));
  }

}
