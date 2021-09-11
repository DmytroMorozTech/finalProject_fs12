package com.danit.fs12.security.oauth2;

import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class OAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

  private final UserService userService;

  public void onAuthenticationSuccess(HttpServletRequest request,
                                      HttpServletResponse response,
                                      Authentication authentication) throws IOException, ServletException {
    CustomOAuth2User oauth2User = (CustomOAuth2User) authentication.getPrincipal();

    userService.processOAuthPostLogin(oauth2User.getEmail(),
      oauth2User.getAttribute("picture"),
      oauth2User.getAttribute("given_name"),
      oauth2User.getAttribute("family_name"));

    //TODO temporary hardcoded redirect url (we must change redirect url to "/home" before deploy or remove it)
    response.sendRedirect("http://localhost:3000/home");
    super.onAuthenticationSuccess(request, response, authentication);
  }
}
