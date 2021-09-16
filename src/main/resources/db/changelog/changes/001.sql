drop table if exists invitations cascade;

create table invitations
(
  id            bigint generated always as identity,
  created_date  timestamp,
  modified_date timestamp,
  text          varchar(255),
  user_who_id   bigint,
  user_whom_id  bigint,
  primary key (id)
);

ALTER TABLE invitations
  ADD CONSTRAINT uq_invitations UNIQUE (user_who_id, user_whom_id);