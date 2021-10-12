create table notifications
(
  id            bigserial not null,
  created_date  timestamp,
  modified_date timestamp,
  data          json,
  type          integer,
  user_id       bigint,
  is_read       boolean,
  primary key (id)
);


alter table notifications
  add constraint FK9y21adhxn0ayjhfocscqox7bh foreign key (user_id) references users;

INSERT INTO notifications (created_date, modified_date, data, type, user_id, is_read)
VALUES (CURRENT_DATE, CURRENT_DATE, '{"post_id": 1, "number_of_comments": 3}' FORMAT JSON, 2, 1, false),
       (CURRENT_DATE, CURRENT_DATE, '{"post_id": 2, "number_of_comments": 2}' FORMAT JSON, 2, 2, false),
       (CURRENT_DATE, CURRENT_DATE, '{"post_id": 3, "number_of_comments": 2}' FORMAT JSON, 2, 3, false),
       (CURRENT_DATE, CURRENT_DATE, '{"post_id": 1, "number_of_likes": 8}' FORMAT JSON, 0, 1, false),
       (CURRENT_DATE, CURRENT_DATE, '{"post_id": 2, "number_of_likes": 2}' FORMAT JSON, 0, 2, false),
       (CURRENT_DATE, CURRENT_DATE, '{"post_id": 3, "number_of_likes": 2}' FORMAT JSON, 0, 3, false),
       (CURRENT_DATE, CURRENT_DATE, '{"post_id": 4, "number_of_likes": 2}' FORMAT JSON, 0, 4, false),
       (CURRENT_DATE, CURRENT_DATE, '{"post_id": 5, "number_of_likes": 1}' FORMAT JSON, 0, 5, false),
       (CURRENT_DATE, CURRENT_DATE, '{"post_id": 6, "number_of_likes": 1}' FORMAT JSON, 0, 6, false),
       (CURRENT_DATE, CURRENT_DATE, '{"post_id": 7, "number_of_likes": 1}' FORMAT JSON, 0, 7, false);


