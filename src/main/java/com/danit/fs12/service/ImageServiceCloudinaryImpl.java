package com.danit.fs12.service;

import com.danit.fs12.entity.post.PostRs;
import com.danit.fs12.entity.user.UserRs;
import org.springframework.web.multipart.MultipartFile;

public class ImageServiceCloudinaryImpl implements ImageServiceInterface {

  @Override
  public UserRs uploadAvatar(MultipartFile file) {
    return null;
  }

  @Override
  public UserRs updateAvatar(MultipartFile file) {
    return null;
  }

  @Override
  public UserRs deleteAvatar() {
    return null;
  }

  @Override
  public UserRs uploadProfileBgImg(MultipartFile file) {
    return null;
  }

  @Override
  public UserRs updateProfileBgImg(MultipartFile file) {
    return null;
  }

  @Override
  public UserRs deleteProfileBgImg() {
    return null;
  }

  @Override
  public PostRs uploadPostImg(MultipartFile file) {
    return null;
  }

  @Override
  public PostRs updatePostImg(MultipartFile file) {
    return null;
  }

  @Override
  public PostRs deletePostImg() {
    return null;
  }
}
