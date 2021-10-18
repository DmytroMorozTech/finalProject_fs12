drop table if exists connections cascade;

create table connections
(
  id            bigserial not null,
  created_date  timestamp,
  modified_date timestamp,
  user_who_id   bigint,
  user_whom_id  bigint,
  primary key (id)
);

alter table connections
  add constraint connections_user_whom_id_fk foreign key (user_whom_id) references users;
alter table connections
  add constraint connections_user_who_id_fk foreign key (user_who_id) references users;

ALTER TABLE connections
  ADD CONSTRAINT uq_connections UNIQUE (user_who_id, user_whom_id);

INSERT INTO CONNECTIONS(created_date, modified_date, user_who_id, user_whom_id)
VALUES (CURRENT_DATE, CURRENT_DATE, 7, 1),
       (CURRENT_DATE, CURRENT_DATE, 1, 4),
       (CURRENT_DATE, CURRENT_DATE, 2, 4),
       (CURRENT_DATE, CURRENT_DATE, 2, 5),
       (CURRENT_DATE, CURRENT_DATE, 2, 6),
       (CURRENT_DATE, CURRENT_DATE, 3, 4),
       (CURRENT_DATE, CURRENT_DATE, 3, 5),
       (CURRENT_DATE, CURRENT_DATE, 3, 6),
       (CURRENT_DATE, CURRENT_DATE, 8, 4),
       (timestamp '2021-10-13 16:23:29.569125', timestamp '2021-10-13 16:23:29.569125', 5, 1),
       (timestamp '2021-12-12 17:11:22.333223', timestamp '2021-12-12 17:11:22.333223', 11, 1),
       (timestamp '2021-12-12 17:11:22.333223', timestamp '2021-12-12 17:11:22.333223', 11, 2),
       (timestamp '2021-12-12 17:11:22.333223', timestamp '2021-12-12 17:11:22.333223', 11, 3),
       (timestamp '2021-12-12 17:11:22.333223', timestamp '2021-12-12 17:11:22.333223', 11, 4),
       (timestamp '2021-12-12 17:11:22.333223', timestamp '2021-12-12 17:11:22.333223', 11, 5),
       (timestamp '2021-12-12 17:11:22.333223', timestamp '2021-12-12 17:11:22.333223', 11, 6),
       (timestamp '2021-12-12 17:11:22.333223', timestamp '2021-12-12 17:11:22.333223', 7, 11),
       (timestamp '2021-12-12 17:11:22.333223', timestamp '2021-12-12 17:11:22.333223', 8, 11),
       (timestamp '2021-12-12 17:11:22.333223', timestamp '2021-12-12 17:11:22.333223', 9, 11),
       (timestamp '2021-12-12 17:11:22.333223', timestamp '2021-12-12 17:11:22.333223', 10, 11);

