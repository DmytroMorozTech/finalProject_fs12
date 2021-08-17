package com.danit.fs12.controller;

import com.danit.fs12.entity.authentication.AuthRequest;
import com.danit.fs12.entity.authentication.AuthResponse;
import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.facade.UserFacade;
import com.danit.fs12.security.RegistrationRequest;
import com.danit.fs12.security.jwt.JwtProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
@RequestMapping(path = "/api")
public class AuthController {

  private final UserFacade userFacade;
  @Autowired
  private JwtProvider jwtProvider;

  @PostMapping("/register")
  public String registerUser(@RequestBody @Valid RegistrationRequest registrationRequest) {
    userFacade.registerUser(registrationRequest.getFirstName(),
      registrationRequest.getLastName(),
      registrationRequest.getAge(),
      registrationRequest.getPhoneNumber(),
      registrationRequest.getPassword(),
      registrationRequest.getEmail(),
      registrationRequest.getAvatarUrl());
    return "OK";
  }

  @PostMapping("/auth")
  public AuthResponse auth(@RequestBody AuthRequest request) {
    UserRs userRs = userFacade.findByEmailAndPassword(request.getLogin(), request.getPassword());
    String token = jwtProvider.generateToken(userRs.getEmail());
    return new AuthResponse(token);
  }

  @GetMapping("/activeuser")
  public UserRs currentUser() {
    return userFacade.getActiveUser();
  }

}
