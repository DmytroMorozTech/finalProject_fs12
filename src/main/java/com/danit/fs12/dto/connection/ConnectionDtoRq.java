package com.danit.fs12.dto.connection;

import lombok.Data;

import javax.validation.constraints.NotNull;

@Data
public class ConnectionDtoRq {

  @NotNull(message = "activeUserId should be specified.")
  Long activeUserId;

  @NotNull(message = "userBeingFollowedId should be specified.")
  Long userBeingFollowedId;

}
