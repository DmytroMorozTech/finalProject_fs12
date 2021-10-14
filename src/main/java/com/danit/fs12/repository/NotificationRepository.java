package com.danit.fs12.repository;

import com.danit.fs12.entity.notification.Notification;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepository extends RepositoryInterface<Notification> {

  Page<Notification> findNotificationsByUserId(Long userId, Pageable page);
}