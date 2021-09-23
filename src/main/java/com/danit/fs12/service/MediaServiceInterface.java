package com.danit.fs12.service;

import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface MediaServiceInterface {
  User uploadAvatarImg(MultipartFile file) throws IOException;

  User updateAvatarImg(MultipartFile file);

  User deleteAvatarImg();

  User uploadProfileBgImg(MultipartFile file) throws IOException;

  User updateProfileBgImg(MultipartFile file);

  User deleteProfileBgImg();

  String uploadPostImg(MultipartFile file) throws IOException;

  Post updatePostImg(MultipartFile file);

  Post deletePostImg();

  String uploadPostVideo(MultipartFile file) throws IOException;
}
