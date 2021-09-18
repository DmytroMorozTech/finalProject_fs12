package com.danit.fs12.entity.connection;

import com.danit.fs12.controller.views.ConnectionViews;
import com.danit.fs12.entity.user.UserRs;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.Data;

@Data
@JsonView(ConnectionViews.Base.class)
public class ConnectionRs {

  private Long id;
  private UserRs userWho;
  private UserRs userWhom;

}
