package com.danit.fs12.entity.connection;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class ConnectionRq {

  @NotNull(message = "Connection should be specified.")
  private Long userWhomId;

}
