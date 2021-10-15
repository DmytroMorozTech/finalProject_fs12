package com.danit.fs12.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.Transformation;
import com.cloudinary.utils.ObjectUtils;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MediaServiceCloudinaryImpl implements MediaServiceInterface {
  private final Cloudinary cloudinary;
  private final UserService userService;

  @Override
  public User uploadAvatarImg(MultipartFile file) throws IOException {
    User activeUser = userService.getActiveUser();
    String currentAvatarPublicId = activeUser.getAvatarPublicId();

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

    String newAvatarPublicId = (String) uploadResult.get("public_id");

//    Map<String, String> uploadOptions = new HashMap<>() {
//      {
//        put("invalidate", "true");
//      }
//    };
//
//    if (!currentAvatarPublicId.isEmpty()) {
//      cloudinary.uploader().destroy(currentAvatarPublicId, uploadOptions);
//    }

    activeUser.setAvatarPublicId(newAvatarPublicId);
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
    String currentProfileBgPublicId = activeUser.getProfileBgPublicId();

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
    String newProfileBgPublicId = (String) uploadResult.get("public_id");

//    if (!currentProfileBgPublicId.isEmpty()) {
//      cloudinary.uploader().destroy(
//        currentProfileBgPublicId,
//        new HashMap<>() {
//          {
//            put("invalidate", "true");
//          }
//        });
//    }

    activeUser.setProfileBgPublicId(newProfileBgPublicId);
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
  public String uploadPostImg(MultipartFile file) throws IOException {
    Map uploadResult = cloudinary.uploader().upload(
      file.getBytes(),
      ObjectUtils.asMap(
        "folder", "linkedin/posts-img/",
        "unique_filename", "true",
        "resource_type", "auto",
        "quality", "80",
        "transformation", new Transformation().width(800).crop("fill").gravity("auto")
      )
    );

    String postImgPublicId = (String) uploadResult.get("public_id");
    return postImgPublicId;
  }

  @Override
  public Post updatePostImg(MultipartFile file) {
    return null;
  }

  @Override
  public Post deletePostImg() {
    return null;
  }

  @Override
  public String uploadPostVideo(MultipartFile file) throws IOException {
    Map uploadResult = cloudinary.uploader().upload(
      file.getBytes(),
      ObjectUtils.asMap(
        "folder", "linkedin/posts-video/",
        "unique_filename", "true",
        "resource_type", "video",
        "quality", "80",
        "transformation", new Transformation().width(800).crop("pad").background("white")
      )
    );

    String postVideoPublicId = (String) uploadResult.get("public_id");
    return postVideoPublicId;
  }


}
