package com.danit.fs12.controller;

import com.danit.fs12.controller.views.UserViews;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.facade.UserFacade;
import com.danit.fs12.service.ImageServiceCloudinaryImpl;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api/images/upload")
public class ImageController {
  private final ImageServiceCloudinaryImpl imageService;
  private final UserFacade userFacade;

  @JsonView(UserViews.Profile.class)
  @PostMapping("/avatar")
  public ResponseEntity<UserRs> uploadUserAvatar(@RequestParam("file") MultipartFile file) throws IOException {
    User user = imageService.uploadAvatarImg(file);
    UserRs userRs = userFacade.convertToDto(user);

    return ResponseEntity.ok(userRs);
  }

  @JsonView(UserViews.Profile.class)
  @PostMapping("/profile-bg")
  public ResponseEntity<UserRs> handleProfileBgUpload(@RequestParam("file") MultipartFile file) throws IOException {
    User user = imageService.uploadProfileBgImg(file);
    UserRs userRs = userFacade.convertToDto(user);
    return ResponseEntity.ok(userRs);
  }

  @PostMapping("/post")
  public ResponseEntity<String> handlePostImgUpload(@RequestParam("file") MultipartFile file) throws IOException {
    String imgPublicId = imageService.uploadPostImg(file);
    return ResponseEntity.ok(imgPublicId);
  }

}
