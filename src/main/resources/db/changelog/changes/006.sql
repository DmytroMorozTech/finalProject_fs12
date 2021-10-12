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
VALUES (CURRENT_DATE, CURRENT_DATE, '{"post_id": 11, "number_of_likes": 1}', 0, 1, false),
       (CURRENT_DATE, CURRENT_DATE, '{"post_id": 1, "number_of_comments": 1}', 2, 1, false);

-- 	when data is created using Controller -> Service -> Repo
-- 	everything is inserted in a correct manner: {"post_id":4,"number_of_likes":1}

-- when I try to insert it using 006.sql, we get the following output in actual Postgres DB:
-- "{\"post_id\": 11, \"number_of_likes\": 1}"
-- How do I remove these escape characters ?


