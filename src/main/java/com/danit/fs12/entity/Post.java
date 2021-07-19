package com.danit.fs12.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "Post")
@Table(name = "posts")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Post extends AbstractEntity {
  private String title;
  @Column(name = "main_text", length = 280)
  private String mainText;

  public Post(String title, String mainText) {
    this.title = title;
    this.mainText = mainText;
  }

  @ManyToOne
  @JoinColumn(
      name = "user_id",
      nullable = false,
      referencedColumnName = "id",
      foreignKey = @ForeignKey(
          name = "user_post_fk"
      )
  )
  private User user;


  @OneToMany(
      mappedBy = "post",
      cascade = CascadeType.ALL)
  private List<Comment> comments = new ArrayList<>();

  public Comment addComment(Comment comment) {
    if (!this.comments.contains(comment)) {
      this.comments.add(comment);
      comment.setPost(this);
    }
    return comment;
  }

  @Override
  public String toString() {
    return "Post{" +
        "title='" + title + '\'' +
        ", mainText='" + mainText + '\'' +
        ", user=" + user +
        '}';
  }
}
