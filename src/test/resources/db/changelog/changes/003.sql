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