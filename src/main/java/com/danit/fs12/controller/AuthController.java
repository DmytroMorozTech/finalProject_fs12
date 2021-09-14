package com.danit.fs12.controller;

import com.danit.fs12.entity.authentication.AuthRequest;
import com.danit.fs12.entity.authentication.AuthResponse;
import com.danit.fs12.entity.restore.RestoreRequest;
import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.facade.UserFacade;
import com.danit.fs12.security.RegistrationRequest;
import com.danit.fs12.security.UpdatePasswordRequest;
import com.danit.fs12.security.jwt.JwtProvider;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api")
public class AuthController {

  private final UserFacade userFacade;
  @Autowired
  private JwtProvider jwtProvider;

  @PostMapping("/signup")
  public String registerUser(@RequestBody @Valid RegistrationRequest registrationRequest) {
    userFacade.registerUser(registrationRequest.getFirstName(),
      registrationRequest.getLastName(),
      registrationRequest.getPassword(),
      registrationRequest.getEmail().toLowerCase());
    return "SIGNED UP!";
  }

  @PostMapping("/auth")
  public AuthResponse auth(@RequestBody AuthRequest request) {
    UserRs userRs = userFacade.findByEmailAndPassword(request.getLogin(), request.getPassword());
    String token = jwtProvider.generateToken(userRs.getEmail());
    return new AuthResponse(token);
  }

  @GetMapping("/activeuser")
  @JsonView(UserViews.Base.class)
  public UserRs currentUser() {
    return userFacade.getActiveUser();
  }

  @PostMapping("/update_password")
  @JsonView(UserViews.Base.class)
  public UserRs currentGoogleAuthUserData(@RequestBody @Valid UpdatePasswordRequest updatePasswordRequest) {
    return userFacade.updateUserPassword(updatePasswordRequest);
  }

  @PutMapping("/forgot_password/")
  public void processForgotPassword(@RequestBody RestoreRequest restoreRequest) throws MessagingException, UnsupportedEncodingException {
    userFacade.generateResetPasswordNumber(restoreRequest);
  }

  @PostMapping("/forgot_password/")
  public boolean isUserRecognized(@RequestBody RestoreRequest restoreRequest) {
    return userFacade.isUserRecognized(restoreRequest);
  }

  @PutMapping("/forgot_password/restore")
  public void updateUserPassword(@RequestBody RestoreRequest restoreRequest) {
    userFacade.updateUserPassword(restoreRequest);
  }
}
