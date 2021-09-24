create table notifications
(
  id                bigserial not null,
  created_date      timestamp,
  modified_date     timestamp,
  data_notification json,
  related_user_id   bigint,
  type_notification integer,
  user_id           bigint,
  post_id           bigint,
  like_id           bigint,
  is_read           boolean,
  primary key (id)
);

alter table notifications
  add constraint FK9y21adhxn0ayjhfocscqox7bh foreign key (user_id) references users;
