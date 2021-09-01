package com.danit.fs12.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ImageServiceCloudinaryImpl implements ImageServiceInterface {
  private final Cloudinary cloudinary;
  private final UserService userService;

  @Override
  public User uploadAvatarImg(MultipartFile file) throws IOException {
    User activeUser = userService.getActiveUser();
    String currentAvatarUrl = activeUser.getAvatarUrl();

    Map uploadResult = cloudinary.uploader().upload(
      file.getBytes(),
      ObjectUtils.asMap(
        "folder", "linkedin/avatars/",
        "unique_filename", "true",
        "resource_type", "auto",
        "quality", "80",
        "transformation", new Transformation().width(400).height(400).crop("fill").gravity("face").radius("max")
      )
    );

    String imgPublicId = (String) uploadResult.get("public_id");
    System.out.println(imgPublicId);

    Map<String, String> uploadOptions = new HashMap<>() {{
      put("invalidate", "true");
    }};

    if (!currentAvatarUrl.isEmpty()) {
      cloudinary.uploader().destroy(currentAvatarUrl, uploadOptions);
    }

    activeUser.setAvatarUrl(imgPublicId);
    return userService.save(activeUser);
  }

  @Override
  public User updateAvatarImg(MultipartFile file) {
    return null;
  }

  @Override
  public User deleteAvatarImg() {
    return null;
  }

  @Override
  public User uploadProfileBgImg(MultipartFile file) throws IOException {
    User activeUser = userService.getActiveUser();
    String currentProfileBgUrl = activeUser.getProfileBgUrl();
    String currentProfileBgPublicId = getPublicIdFromImgUrl(currentProfileBgUrl);

    Map uploadResult = cloudinary.uploader().upload(
      file.getBytes(),
      ObjectUtils.asMap(
        "folder", "linkedin/profile-bg/",
        "unique_filename", "true",
        "resource_type", "auto",
        "quality", "80",
        "transformation", new Transformation().width(1400).height(350).crop("fill").gravity("auto")
      )
    );
    String newProfileBgUrl = (String) uploadResult.get("url");

    if (!currentProfileBgUrl.isEmpty()) {
      cloudinary.uploader().destroy(
        currentProfileBgPublicId,
        new HashMap<>() {{ put("invalidate", "true");}});
    }

    activeUser.setProfileBgUrl(newProfileBgUrl);
    return userService.save(activeUser);
  }

  @Override
  public User updateProfileBgImg(MultipartFile file) {
    return null;
  }

  @Override
  public User deleteProfileBgImg() {
    return null;
  }

  @Override
  public Post uploadPostImg(MultipartFile file) {
    return null;
  }

  @Override
  public Post updatePostImg(MultipartFile file) {
    return null;
  }

  @Override
  public Post deletePostImg() {
    return null;
  }

  private String getPublicIdFromImgUrl(String imgUrl) {
    int startIndex = imgUrl.indexOf("linkedin");
    int endIndex = imgUrl.lastIndexOf('.');
    return imgUrl.substring(startIndex, endIndex);
  }
}
