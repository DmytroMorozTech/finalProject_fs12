package com.danit.fs12.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;

import java.time.ZonedDateTime;

@Data
@AllArgsConstructor
@ToString
public class ApiException {
  private final String message;
  private final ZonedDateTime zonedDateTime;
}