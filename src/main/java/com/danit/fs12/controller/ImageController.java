package com.danit.fs12.controller;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.facade.UserFacade;
import com.danit.fs12.service.UserService;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/images/upload")
public class ImageController {
  private final Cloudinary cloudinary;
  private final UserService userService;
  private final UserFacade userFacade;

  @JsonView(UserViews.Profile.class)
  @PostMapping("/avatar")
  public ResponseEntity<UserRs> handleUserAvatarUpload(@RequestParam("file") MultipartFile file) throws IOException {
    User activeUser = userService.getActiveUser();
    String currentAvatarUrl = activeUser.getAvatarUrl();
    System.out.printf("URL of active User's avatar: %s", currentAvatarUrl);
    System.out.printf("Active user's full name: %s", activeUser.getFullName());


    Map uploadResult = cloudinary.uploader().upload(
      file.getBytes(),
      ObjectUtils.asMap(
        "folder", "linkedin/avatars/",
//        "public_id", fileName,
//        "use_filename", "true",
        "unique_filename", "true",
        "resource_type", "auto"
      )
    );
    String newAvatarUrl = (String) uploadResult.get("public_id");
    // we will store in DB not the full URL, but only Cloudinary public_id that is needed to render the image
    System.out.println(newAvatarUrl);

    // if our uploadRequest succeeded, than uploadResult.status == 200 and we can read uploadResult.public_id from it

    Map<String, String> uploadOptions = new HashMap<>() {{
      put("invalidate", "true");
    }};

    if (!currentAvatarUrl.isEmpty()) {
      cloudinary.uploader().destroy(currentAvatarUrl, uploadOptions);
    }

    activeUser.setAvatarUrl(newAvatarUrl);
    User savedUser = userService.save(activeUser);

//    Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
//    System.out.println(uploadResult.get("url"));
    return ResponseEntity.ok(userFacade.convertToDto(savedUser));
  }

  @JsonView(UserViews.Profile.class)
  @PostMapping("/profile-bg")
  public ResponseEntity<UserRs> handleProfileBgUpload(@RequestParam("file") MultipartFile file) throws IOException {
    User activeUser = userService.getActiveUser();
    String currentProfileBgUrl = activeUser.getProfileBgUrl();
    String currentProfileBgPublicId = getPublicIdFromImgUrl(currentProfileBgUrl);

    Map uploadResult = cloudinary.uploader().upload(
      file.getBytes(),
      ObjectUtils.asMap(
        "folder", "linkedin/profile-bg/",
        "unique_filename", "true",
        "resource_type", "auto"
      )
    );
    String newProfileBgUrl = (String) uploadResult.get("url");

    if (!currentProfileBgUrl.isEmpty()) {
      cloudinary.uploader().destroy(
        currentProfileBgPublicId,
        new HashMap<>() {{ put("invalidate", "true");}});
    }

    activeUser.setProfileBgUrl(newProfileBgUrl);
    User savedUser = userService.save(activeUser);
    return ResponseEntity.ok(userFacade.convertToDto(savedUser));
  }

  private String getPublicIdFromImgUrl(String imgUrl) {
    int startIndex = imgUrl.indexOf("linkedin");
    int endIndex = imgUrl.lastIndexOf('.');
    return imgUrl.substring(startIndex, endIndex);
  }

}
