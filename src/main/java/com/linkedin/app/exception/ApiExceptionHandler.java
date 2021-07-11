package com.linkedin.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.ZonedDateTime;

@ControllerAdvice
public class ApiExceptionHandler {

  @ExceptionHandler(value = ApiRequestException.class)
  public ResponseEntity<Object> handleApiRequestException(
      ApiRequestException ex
  ) {

    ApiException apiException = new ApiException(
        ex.getMessage(),
        HttpStatus.BAD_REQUEST,
        ZonedDateTime.now()
    );

    return new ResponseEntity<>(apiException, HttpStatus.BAD_REQUEST);
  }

  @ExceptionHandler(value = NotFoundException.class)
  public ResponseEntity<Object> handleNotFoundException(
      NotFoundException ex
  ) {

    ApiException apiException = new ApiException(
        ex.getMessage(),
        HttpStatus.NOT_FOUND,
        ZonedDateTime.now()
    );

    return new ResponseEntity<>(apiException, HttpStatus.NOT_FOUND);
  }

  @ExceptionHandler(value = ConflictException.class)
  public ResponseEntity<Object> handleConflictException(
      ConflictException ex
  ) {

    ApiException apiException = new ApiException(
        ex.getMessage(),
        HttpStatus.CONFLICT,
        ZonedDateTime.now()
    );

    return new ResponseEntity<>(apiException, HttpStatus.CONFLICT);
  }

  @ExceptionHandler(value = ForbiddenException.class)
  public ResponseEntity<Object> handleForbiddenException(
      ForbiddenException ex
  ) {

    ApiException apiException = new ApiException(
        ex.getMessage(),
        HttpStatus.CONFLICT,
        ZonedDateTime.now()
    );

    return new ResponseEntity<>(apiException, HttpStatus.CONFLICT);
  }
}
