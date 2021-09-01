package com.danit.fs12.service;

import com.danit.fs12.entity.post.PostRs;
import com.danit.fs12.entity.user.UserRs;
import org.springframework.web.multipart.MultipartFile;

public interface ImageServiceInterface {
  UserRs uploadAvatar(MultipartFile file);
  UserRs updateAvatar(MultipartFile file);
  UserRs deleteAvatar();

  UserRs uploadProfileBgImg(MultipartFile file);
  UserRs updateProfileBgImg(MultipartFile file);
  UserRs deleteProfileBgImg();

  PostRs uploadPostImg(MultipartFile file);
  PostRs updatePostImg(MultipartFile file);
  PostRs deletePostImg();
}
