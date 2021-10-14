create table notifications
(
  id                 bigserial not null,
  created_date       timestamp,
  modified_date      timestamp,
  data               json,
  type               integer,
  user_id            bigint,
  is_viewed          boolean,
  user_who_triggered json,
  primary key (id)
);


alter table notifications
  add constraint FK9y21adhxn0ayjhfocscqox7bh foreign key (user_id) references users;

INSERT INTO notifications (created_date, modified_date, data, type, user_id, is_viewed, user_who_triggered)
VALUES (timestamp '2021-10-03 10:02:21.123123', timestamp '2021-10-03 10:02:21.123123',
        '{"postId": 1, "numberOfComments": 3}' FORMAT JSON, 2, 1, false, null),
       (timestamp '2021-10-03 11:02:21.123123', timestamp '2021-10-03 10:02:21.123123',
        '{"postId": 2, "numberOfComments": 2}' FORMAT JSON, 2, 2, false, null),
       (timestamp '2021-10-03 12:02:21.123123', timestamp '2021-10-03 12:02:21.123123',
        '{"postId": 12, "numberOfComments": 5}' FORMAT JSON, 2, 2, false, null),
       (timestamp '2021-10-03 13:02:21.123123', timestamp '2021-10-03 13:02:21.123123',
        '{"postId": 21, "numberOfComments": 11}' FORMAT JSON, 2, 2, false, null),
       (timestamp '2021-10-03 14:02:21.123123', timestamp '2021-10-03 14:02:21.123123',
        '{"postId": 23, "numberOfComments": 25}' FORMAT JSON, 2, 2, false, null),
       (timestamp '2021-10-04 14:02:21.123123', timestamp '2021-10-04 14:02:21.123123',
        '{"postId": 24, "numberOfComments": 14}' FORMAT JSON, 2, 2, false, null),
       (timestamp '2021-10-04 15:10:32.123123', timestamp '2021-10-04 15:10:32.123123',
        '{"postId": 3, "numberOfComments": 2}' FORMAT JSON, 2, 3, false, null),
       (timestamp '2021-10-04 16:10:32.123123', timestamp '2021-10-04 16:10:32.123123',
        '{"postId": 1, "numberOfLikes": 8}' FORMAT JSON, 0, 1, false, null),
       (timestamp '2021-10-04 15:10:32.123123', timestamp '2021-10-04 15:10:32.123123',
        '{"postId": 2, "numberOfLikes": 2}' FORMAT JSON, 0, 2, false, null),
       (timestamp '2021-10-04 20:10:32.123123', timestamp '2021-10-04 20:10:32.123123',
        '{"postId": 12, "numberOfLikes": 17}' FORMAT JSON, 0, 2, false, null),
       (timestamp '2021-10-05 20:10:32.123123', timestamp '2021-10-05 20:10:32.123123',
        '{"postId": 21, "numberOfLikes": 6}' FORMAT JSON, 0, 2, false, null),
       (timestamp '2021-10-05 23:10:32.123123', timestamp '2021-10-05 23:10:32.123123',
        '{"postId": 23, "numberOfLikes": 27}' FORMAT JSON, 0, 2, false, null),
       (timestamp '2021-10-05 23:10:32.123123', timestamp '2021-10-05 23:10:32.123123',
        '{"postId": 24, "numberOfLikes": 19}' FORMAT JSON, 0, 2, false, null),
       (timestamp '2021-10-06 11:10:32.123123', timestamp '2021-10-06 11:10:32.123123',
        '{"postId": 3, "numberOfLikes": 2}' FORMAT JSON, 0, 3, false, null),
       (timestamp '2021-10-06 14:12:32.123123', timestamp '2021-10-06 14:12:32.123123',
        '{"postId": 4, "numberOfLikes": 2}' FORMAT JSON, 0, 4, false, null),
       (timestamp '2021-10-07 14:12:32.123123', timestamp '2021-10-07 14:12:32.123123',
        '{"postId": 5, "numberOfLikes": 1}' FORMAT JSON, 0, 5, false, null),
       (timestamp '2021-10-07 20:12:32.123123', timestamp '2021-10-07 20:12:32.123123',
        '{"postId": 6, "numberOfLikes": 1}' FORMAT JSON, 0, 6, false, null),
       (timestamp '2021-10-07 22:32:48.123123', timestamp '2021-10-07 22:32:48.123123',
        '{"postId": 7, "numberOfLikes": 1}' FORMAT JSON, 0, 7, false, null),
       (timestamp '2021-10-13 16:26:30.95932', timestamp '2021-10-13 16:26:30.95932',
        '{"postId": 26}' FORMAT JSON, 1, 1, false,
        '{"imgPublicId":"linkedin/avatars/hj8sulgxxo5ywotggkcy","fullName":"Katherine McCarthy","id":"5","text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aene..."}' FORMAT JSON),
       (timestamp '2021-10-13 16:26:30.95932', timestamp '2021-10-13 16:26:30.95932',
        '{"postId": 26}' FORMAT JSON, 1, 2, false,
        '{"imgPublicId":"linkedin/avatars/hj8sulgxxo5ywotggkcy","fullName":"Katherine McCarthy","id":"5","text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aene..."}' FORMAT JSON),
       (timestamp '2021-10-13 16:26:30.95932', timestamp '2021-10-13 16:26:30.95932',
        '{"postId": 26}' FORMAT JSON, 1, 3, false,
        '{"imgPublicId":"linkedin/avatars/hj8sulgxxo5ywotggkcy","fullName":"Katherine McCarthy","id":"5","text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aene..."}' FORMAT JSON);


