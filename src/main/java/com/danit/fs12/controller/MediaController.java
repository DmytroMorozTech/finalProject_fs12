package com.danit.fs12.controller;

import com.danit.fs12.controller.views.UserViews;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.facade.UserFacade;
import com.danit.fs12.service.MediaServiceCloudinaryImpl;
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
@RequestMapping(path = "/api/media")
public class MediaController {
  private final MediaServiceCloudinaryImpl mediaService;
  private final UserFacade userFacade;

  @JsonView(UserViews.Profile.class)
  @PostMapping("/images/upload/avatar")
  public ResponseEntity<UserRs> uploadUserAvatar(@RequestParam("file") MultipartFile file) throws IOException {
    User user = mediaService.uploadAvatarImg(file);
    UserRs userRs = userFacade.convertToDto(user);

    return ResponseEntity.ok(userRs);
  }

  @JsonView(UserViews.Profile.class)
  @PostMapping("/images/upload/profile-bg")
  public ResponseEntity<UserRs> handleProfileBgUpload(@RequestParam("file") MultipartFile file) throws IOException {
    User user = mediaService.uploadProfileBgImg(file);
    UserRs userRs = userFacade.convertToDto(user);
    return ResponseEntity.ok(userRs);
  }

  @PostMapping("/images/upload/post")
  public ResponseEntity<String> handlePostImgUpload(@RequestParam("file") MultipartFile file) throws IOException {
    String imgPublicId = mediaService.uploadPostImg(file);
    return ResponseEntity.ok(imgPublicId);
  }

  @PostMapping("/videos/upload/post")
  public ResponseEntity<String> handlePostVideoUpload(@RequestParam("file") MultipartFile file) throws IOException {
    String videoPublicId = mediaService.uploadPostVideo(file);
    return ResponseEntity.ok(videoPublicId);
  }
}
