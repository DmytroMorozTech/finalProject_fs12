package com.danit.fs12.security.config;

import com.danit.fs12.security.jwt.JwtFilter;
import com.danit.fs12.security.oauth2.CustomOAuth2UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

  @Autowired
  private JwtFilter jwtFilter;

  @Autowired
  private CustomOAuth2UserService oauthUserService;

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
      .antMatchers("/api/register", "/api/auth", "/oauth/**").permitAll()
      .antMatchers("/h2/**").permitAll()
      .anyRequest().authenticated()
      .and()
      .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
      .oauth2Login()
        .userInfoEndpoint()
          .userService(oauthUserService);
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
