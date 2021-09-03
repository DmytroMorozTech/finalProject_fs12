package com.danit.fs12.security.config;

import com.danit.fs12.security.jwt.JwtFilter;
import com.danit.fs12.security.oauth2.CustomOAuth2User;
import com.danit.fs12.security.oauth2.CustomOAuth2UserService;
import com.danit.fs12.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private JwtFilter jwtFilter;

  @Autowired
  private CustomOAuth2UserService oauthUserService;

  private final UserService userService;

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http
      .headers().frameOptions().disable()
      .and()
      .httpBasic().disable()
      .csrf().disable()
      .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
      .and()
      .authorizeRequests()
      .antMatchers("/resources/**").permitAll()
      .antMatchers("/api/register", "/api/auth", "/oauth/**", "/login").permitAll()
      .antMatchers("/h2/**").permitAll()
      .anyRequest().authenticated()
      .and()
      .sessionManagement()
      .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
      .and()
      .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
      .oauth2Login()
//      .loginPage("/login")
      .userInfoEndpoint()
          .userService(oauthUserService)
      .and()
      .successHandler((httpServletRequest, httpServletResponse, authentication) -> {
        CustomOAuth2User oauth2User = (CustomOAuth2User) authentication.getPrincipal();

        userService.processOAuthPostLogin(oauth2User.getEmail(),
          oauth2User.getAttribute("picture"),
          oauth2User.getAttribute("given_name"),
          oauth2User.getAttribute("family_name"));
        // temporary hardcoded redirect url (we must change redirect url to "/home" before deploy)
        httpServletResponse.sendRedirect("http://localhost:3000/home");
      });
  }
}
