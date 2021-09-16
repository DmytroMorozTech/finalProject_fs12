drop table if exists connections cascade;

create table connections
(
    id            bigint generated always as identity,
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
