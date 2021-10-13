create table notifications
(
  id            bigserial not null,
  created_date  timestamp,
  modified_date timestamp,
  data          json,
  type          integer,
  user_id       bigint,
  is_viewed       boolean,
  primary key (id)
);


alter table notifications
  add constraint FK9y21adhxn0ayjhfocscqox7bh foreign key (user_id) references users;

INSERT INTO notifications (created_date, modified_date, data, type, user_id, is_viewed)
VALUES (timestamp '2021-10-03 10:02:21.123123', timestamp '2021-10-03 10:02:21.123123',
        '{"post_id": 1, "number_of_comments": 3}' FORMAT JSON, 2, 1, false),
       (timestamp '2021-10-03 11:02:21.123123', timestamp '2021-10-03 10:02:21.123123',
        '{"post_id": 2, "number_of_comments": 2}' FORMAT JSON, 2, 2, false),
       (timestamp '2021-10-03 12:02:21.123123', timestamp '2021-10-03 12:02:21.123123',
        '{"post_id": 12, "number_of_comments": 5}' FORMAT JSON, 2, 2, false),
       (timestamp '2021-10-03 13:02:21.123123', timestamp '2021-10-03 13:02:21.123123',
        '{"post_id": 21, "number_of_comments": 11}' FORMAT JSON, 2, 2, false),
       (timestamp '2021-10-03 14:02:21.123123', timestamp '2021-10-03 14:02:21.123123',
        '{"post_id": 23, "number_of_comments": 25}' FORMAT JSON, 2, 2, false),
       (timestamp '2021-10-04 14:02:21.123123', timestamp '2021-10-04 14:02:21.123123',
        '{"post_id": 24, "number_of_comments": 14}' FORMAT JSON, 2, 2, false),
       (timestamp '2021-10-04 15:10:32.123123', timestamp '2021-10-04 15:10:32.123123',
        '{"post_id": 3, "number_of_comments": 2}' FORMAT JSON, 2, 3, false),
       (timestamp '2021-10-04 16:10:32.123123', timestamp '2021-10-04 16:10:32.123123',
        '{"post_id": 1, "number_of_likes": 8}' FORMAT JSON, 0, 1, false),
       (timestamp '2021-10-04 15:10:32.123123', timestamp '2021-10-04 15:10:32.123123',
        '{"post_id": 2, "number_of_likes": 2}' FORMAT JSON, 0, 2, false),
       (timestamp '2021-10-04 20:10:32.123123', timestamp '2021-10-04 20:10:32.123123',
         '{"post_id": 12, "number_of_likes": 17}' FORMAT JSON, 0, 2, false),
       (timestamp '2021-10-05 20:10:32.123123', timestamp '2021-10-05 20:10:32.123123',
        '{"post_id": 21, "number_of_likes": 6}' FORMAT JSON, 0, 2, false),
       (timestamp '2021-10-05 23:10:32.123123', timestamp '2021-10-05 23:10:32.123123',
        '{"post_id": 23, "number_of_likes": 27}' FORMAT JSON, 0, 2, false),
       (timestamp '2021-10-05 23:10:32.123123', timestamp '2021-10-05 23:10:32.123123',
        '{"post_id": 24, "number_of_likes": 19}' FORMAT JSON, 0, 2, false),
       (timestamp '2021-10-06 11:10:32.123123', timestamp '2021-10-06 11:10:32.123123',
        '{"post_id": 3, "number_of_likes": 2}' FORMAT JSON, 0, 3, false),
       (timestamp '2021-10-06 14:12:32.123123', timestamp '2021-10-06 14:12:32.123123',
        '{"post_id": 4, "number_of_likes": 2}' FORMAT JSON, 0, 4, false),
       (timestamp '2021-10-07 14:12:32.123123', timestamp '2021-10-07 14:12:32.123123',
        '{"post_id": 5, "number_of_likes": 1}' FORMAT JSON, 0, 5, false),
       (timestamp '2021-10-07 20:12:32.123123', timestamp '2021-10-07 20:12:32.123123',
        '{"post_id": 6, "number_of_likes": 1}' FORMAT JSON, 0, 6, false),
       (timestamp '2021-10-07 22:32:48.123123', timestamp '2021-10-07 22:32:48.123123',
        '{"post_id": 7, "number_of_likes": 1}' FORMAT JSON, 0, 7, false);


