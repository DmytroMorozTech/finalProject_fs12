package com.danit.fs12.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//@Controller
@RequestMapping("/")
public class FrontendController {
  @GetMapping
  public String trueIndex() {
    return "forward:/index.html";
  }

  @RequestMapping(
    method = {RequestMethod.OPTIONS, RequestMethod.GET},
    path = "**/{subpath:[^\\.]+}",
    headers = {"Connection!=Upgrade", "upgrade!=websocket"})
  public String fakeIndex() {
    return "forward:/index.html";
  }
}