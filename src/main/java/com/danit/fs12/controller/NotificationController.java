package com.danit.fs12.controller;

import com.danit.fs12.controller.views.NotificationViews;
import com.danit.fs12.entity.notification.NotificationRs;
import com.danit.fs12.facade.NotificationFacade;
import com.danit.fs12.utils.HeadersUtils;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Max;
import java.util.List;

@Slf4j
@RestController
@RequestMapping(path = "/api/notifications")
@RequiredArgsConstructor
public class NotificationController {
  private final NotificationFacade notificationFacade;

  @DeleteMapping(path = "{id}")
  public ResponseEntity<?> deleteById(@PathVariable Long id) {
    notificationFacade.deleteById(id);
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

  @GetMapping
  @JsonView(NotificationViews.Base.class)
  ResponseEntity<List<NotificationRs>> getNotificationsForActiveUser(
    @RequestParam(defaultValue = "0") Integer pageNumber,
    @RequestParam(defaultValue = "4") @Max(100) Integer pageSize,
    @RequestParam(defaultValue = "id") String sortBy
  ) {
    Page<NotificationRs> pageOfNotifications = notificationFacade
      .getNotificationsForActiveUser(pageNumber, pageSize, sortBy);
    List<NotificationRs> content = pageOfNotifications.getContent();
    HttpHeaders responseHeaders = HeadersUtils.createPaginationHeaders(pageOfNotifications);

    return ResponseEntity.ok()
      .headers(responseHeaders)
      .body(content);
  }

  @PutMapping(path = "/mark_as_viewed/{id}")
  @JsonView(NotificationViews.Base.class)
  public ResponseEntity<NotificationRs> markNotificationAsViewed(@PathVariable Long id) {
    NotificationRs notification = notificationFacade.markNotificationAsViewed(id);
    return ResponseEntity.ok(notification);
  }

  @PutMapping(path = "/mark_as_viewed/all")
  public ResponseEntity<?> markAllNotificationAsViewed() {
    notificationFacade.markAllNotificationAsViewed();
    return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
  }

}
