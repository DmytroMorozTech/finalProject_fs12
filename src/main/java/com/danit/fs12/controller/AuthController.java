package com.danit.fs12.controller;

import com.danit.fs12.entity.authentication.AuthRequest;
import com.danit.fs12.entity.authentication.AuthResponse;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.security.RegistrationRequest;
import com.danit.fs12.security.jwt.JwtProvider;
import com.danit.fs12.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class AuthController {

  @Autowired
  private UserService userService;

  @Autowired
  private JwtProvider jwtProvider;

  @PostMapping("/register")
  public String registerUser(@RequestBody @Valid RegistrationRequest registrationRequest) {
    User applicationUser = new User();
    applicationUser.setFirstName(registrationRequest.getFirstName());
    applicationUser.setLastName(registrationRequest.getLastName());
    applicationUser.setAge(registrationRequest.getAge());
    applicationUser.setPhoneNumber(registrationRequest.getPhoneNumber());
    applicationUser.setPasswordHash(registrationRequest.getPassword());
    applicationUser.setEmail(registrationRequest.getEmail());
    userService.save(applicationUser);
    return "OK";
  }

  @PostMapping("/auth")
  public AuthResponse auth(@RequestBody AuthRequest request) {
    User user = userService.findByEmailAndPassword(request.getEmail(), request.getPasswordHash());
    String token = jwtProvider.generateToken(user.getEmail());
    return new AuthResponse(token);
  }

}
