package com.danit.fs12.controller;

import com.danit.fs12.entity.authentication.AuthRequest;
import com.danit.fs12.entity.authentication.AuthResponse;
import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.facade.UserFacade;
import com.danit.fs12.security.RegistrationRequest;
import com.danit.fs12.security.jwt.JwtProvider;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import javax.validation.Valid;
import java.util.Optional;

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
      registrationRequest.getEmail());
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
}
