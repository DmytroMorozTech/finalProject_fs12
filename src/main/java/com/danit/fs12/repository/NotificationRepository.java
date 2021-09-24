package com.danit.fs12.repository;

import com.danit.fs12.entity.notification.Notification;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends RepositoryInterface<Notification> {

  List<Notification> findNotificationsByUserId(Long userId);
}