package com.danit.fs12.entity.like;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class LikeRq {

  @NotNull(message = "activeUserId should be specified.")
  Long activeUserId;

  @NotNull(message = "postId should be specified.")
  Long postId;

  // At LikeController we will have a method toggleLike(LikeRq rq)
  // in LikeService we may write a @Query method that will check if there is a Like entity in DB
  // link table contains data: id, user_id, post_id
  // where user_id == activeUserId and post_id == post_id

//  @Repository
//  public interface AccountRepo extends JpaRepository<Account, Long> {
//
//    @Query("SELECT a FROM Account a WHERE a.accountNumber = ?1")
//    Optional<Account> findAccountByAccountNumber(String accountNumber);
//  }

}
