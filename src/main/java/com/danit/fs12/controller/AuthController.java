package com.danit.fs12.controller;

import com.danit.fs12.entity.authentication.AuthRequest;
import com.danit.fs12.entity.authentication.AuthResponse;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.user.UserRs;
import com.danit.fs12.facade.IAuthenticationFacade;
import com.danit.fs12.facade.UserFacade;
import com.danit.fs12.security.RegistrationRequest;
import com.danit.fs12.security.jwt.JwtProvider;
import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.security.Principal;

@RestController
@RequiredArgsConstructor
public class AuthController {

  private final UserFacade userFacade;
  @Autowired
  private UserService userService;
  @Autowired
  private JwtProvider jwtProvider;
  @Autowired
  private IAuthenticationFacade authenticationFacade;

  @PostMapping("/register")
  public String registerUser(@RequestBody @Valid RegistrationRequest registrationRequest) {
    User applicationUser = new User();
    applicationUser.setFirstName(registrationRequest.getFirstName());
    applicationUser.setLastName(registrationRequest.getLastName());
    applicationUser.setAge(registrationRequest.getAge());
    applicationUser.setPhoneNumber(registrationRequest.getPhoneNumber());
    applicationUser.setPasswordHash(registrationRequest.getPassword());
    applicationUser.setEmail(registrationRequest.getEmail());
    userService.saveUser(applicationUser);
    return "OK";
  }

  @PostMapping("/auth")
  public AuthResponse auth(@RequestBody AuthRequest request) {
    User user = userService.findByEmailAndPassword(request.getLogin(), request.getPassword());
    String token = jwtProvider.generateToken(user.getEmail());
    return new AuthResponse(token);
  }

  @GetMapping("/activeuser")
  public UserRs currentUserNameByPrincipal(Principal principal) {
    Authentication authentication = authenticationFacade.getAuthentication();
    return userFacade.getActiveUser(authentication.getName());

  }

}
