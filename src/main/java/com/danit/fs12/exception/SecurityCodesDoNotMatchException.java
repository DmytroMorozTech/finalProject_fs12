package com.danit.fs12.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE)
public class SecurityCodesDoNotMatchException extends RuntimeException {
  public SecurityCodesDoNotMatchException(String message) {
    super(message);

  }
}