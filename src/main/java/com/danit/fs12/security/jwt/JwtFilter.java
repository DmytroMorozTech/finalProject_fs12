package com.danit.fs12.security.jwt;

import com.danit.fs12.security.AuthUserDetails;
import com.danit.fs12.security.AuthUserDetailsService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
@Log
public class JwtFilter extends GenericFilterBean {


  @Autowired
  private JwtProvider jwtProvider;

  @Autowired
  private AuthUserDetailsService authUserDetailsService;

  public static final String AUTHORIZATION = "Authorization";

  @Override
  public void doFilter(ServletRequest servletRequest,
                       ServletResponse servletResponse,
                       FilterChain filterChain) throws IOException, ServletException {
    logger.info("do filter...");
    String token = getTokenFromRequest((HttpServletRequest) servletRequest);
    if (token != null && jwtProvider.validateToken(token)) {
      String login = jwtProvider.getLoginFromToken(token);
      AuthUserDetails authUserDetails = authUserDetailsService.loadUserByUsername(login);
      UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(authUserDetails, null, authUserDetails.getAuthorities());
      SecurityContextHolder.getContext().setAuthentication(auth);
    }
    filterChain.doFilter(servletRequest, servletResponse);
  }

  private String getTokenFromRequest(HttpServletRequest request) {
    String bearer = request.getHeader(AUTHORIZATION);
    if (StringUtils.hasText(bearer) && bearer.startsWith("Bearer ")) {
      return bearer.substring(7);
    }
    return null;
  }
}
