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
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
  @JsonView(UserViews.Base.class)
  public UserRs currentUser() {
    return userFacade.getActiveUser();
  }

  @GetMapping("/google_auth")
  public RedirectView googleAuth() {
    String url = "/oauth2/authorization/google";
    RedirectView redirectView = new RedirectView();
    redirectView.setUrl(url);
    return redirectView;
  }

  @GetMapping("/logout")
  public RedirectView logoutPage(HttpServletRequest request, HttpServletResponse response) {
    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
    if (auth != null) {
      new SecurityContextLogoutHandler().logout(request, response, auth);
    }
    String url = "/login";
    RedirectView redirectView = new RedirectView();
    redirectView.setUrl(url);
    return redirectView;
  }
}
