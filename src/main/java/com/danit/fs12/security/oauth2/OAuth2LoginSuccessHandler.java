package com.danit.fs12.security.oauth2;

import com.danit.fs12.entity.user.Provider;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class OAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

  private final UserService userService;

  public void onAuthenticationSuccess (HttpServletRequest request,
                                       HttpServletResponse response,
                                       Authentication authentication) throws IOException, ServletException {
    CustomOAuth2User oauth2User = (CustomOAuth2User) authentication.getPrincipal();
    String email = oauth2User.getEmail();
    String name = oauth2User.getAttribute("name");
    String avatarUrl = oauth2User.getAttribute("picture");
    System.out.println("Attributes: " + avatarUrl);

    User user = userService.findByEmail(email);

    if(user == null) {
      //reg a new user
      userService.createNewUserAfterOAuthLoginSuccess(email, name, Provider.GOOGLE);
    } else {
      //update user
      userService.updateUserAfterOAuthLoginSuccess(user, name, Provider.GOOGLE);
    }
    System.out.println("Customer's email: " + email);
    super.onAuthenticationSuccess(request, response, authentication);
  }
}
