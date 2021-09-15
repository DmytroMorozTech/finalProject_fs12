drop table if exists bookmarks cascade;
drop table if exists certifications cascade;
drop table if exists chats cascade;
drop table if exists comments cascade;
drop table if exists comments_likes cascade;
drop table if exists educations cascade;
drop table if exists followers cascade;
drop table if exists groups cascade;
drop table if exists messages cascade;
drop table if exists organizations cascade;
drop table if exists posts cascade;
drop table if exists posts_likes cascade;
drop table if exists user_has_groups cascade;
drop table if exists users cascade;
drop table if exists users_chats cascade;
drop table if exists work_places cascade;

create table bookmarks
(
    id            bigserial not null,
    created_date  timestamp,
    modified_date timestamp,
    post_id       int8,
    user_id       int8,
    primary key (id)
);

create table certifications
(
    id                   bigserial not null,
    created_date         timestamp,
    modified_date        timestamp,
    credential_id        varchar(255),
    credential_url       varchar(255),
    expiration_date      date,
    has_expiry_date      boolean,
    issue_date           date,
    issuing_organization varchar(255),
    name                 varchar(255),
    user_id              int8,
    primary key (id)
);

create table chats
(
    id            bigserial not null,
    created_date  timestamp,
    modified_date timestamp,
    primary key (id)
);

create table comments
(
    id            bigserial not null,
    created_date  timestamp,
    modified_date timestamp,
    text          varchar(1250),
    post_id       int8,
    user_id       int8,
    primary key (id)
);

create table comments_likes
(
    id            bigserial not null,
    created_date  timestamp,
    modified_date timestamp,
    comment_id    int8,
    user_id       int8,
    primary key (id)
);

create table educations
(
    id              bigserial not null,
    created_date    timestamp,
    modified_date   timestamp,
    activities      varchar(255),
    date_finish     date,
    date_start      date,
    degree_received varchar(255),
    description     varchar(255),
    field_of_study  varchar(255),
    school          varchar(255),
    user_id         int8,
    primary key (id)
);

create table followers
(
    followed_user_id  int8 not null,
    following_user_id int8 not null,
    primary key (following_user_id, followed_user_id)
);

create table groups
(
    id            bigserial not null,
    created_date  timestamp,
    modified_date timestamp,
    description   varchar(280),
    group_name    varchar(255),
    industry      varchar(255),
    location      varchar(255),
    rules         varchar(255),
    primary key (id)
);

create table messages
(
    id            bigserial not null,
    created_date  timestamp,
    modified_date timestamp,
    text          varchar(255),
    chat_id       int8,
    user_id       int8,
    primary key (id)
);

create table organizations
(
    id                  bigserial not null,
    created_date        timestamp,
    modified_date       timestamp,
    email               varchar(255),
    founded_in_year     int4,
    industry            varchar(255),
    location            varchar(255),
    name                varchar(255),
    number_of_employees int4,
    phone_number        varchar(255),
    specialities        varchar(255),
    web_site            varchar(255),
    primary key (id)
);

create table posts
(
    id              bigserial not null,
    created_date    timestamp,
    modified_date   timestamp,
    img_public_id   varchar(255),
    text            varchar(3000),
    video_public_id varchar(255),
    user_id         int8      not null,
    primary key (id)
);

create table posts_likes
(
    id            bigserial not null,
    created_date  timestamp,
    modified_date timestamp,
    post_id       int8,
    user_id       int8,
    primary key (id)
);

create table user_has_groups
(
    user_id  int8 not null,
    group_id int8 not null
);

create table users
(
    id                   bigserial not null,
    created_date         timestamp,
    modified_date        timestamp,
    age                  int4,
    avatar_public_id     varchar(255),
    city                 varchar(255),
    country              varchar(255),
    email                varchar(255),
    first_name           varchar(255),
    headline             varchar(255),
    last_name            varchar(255),
    password_hash        varchar(255),
    phone_number         varchar(255),
    profile_bg_public_id varchar(255),
    provider             varchar(255),
    reset_password_code  varchar(255),
    primary key (id)
);

create table users_chats
(
    user_id int8 not null,
    chat_id int8 not null
);

create table work_places
(
    id                    bigserial not null,
    created_date          timestamp,
    modified_date         timestamp,
    date_finish           date,
    date_start            date,
    is_currently_employed boolean,
    position              varchar(255),
    responsibilities      varchar(255),
    organization_id       int8,
    user_id               int8,
    primary key (id)
);

alter table bookmarks
    add constraint FK7nbb4ldgek7ux7y6lu0y4g826 foreign key (post_id) references posts;
alter table bookmarks
    add constraint FKdbsho2e05w5r13fkjqfjmge5f foreign key (user_id) references users;
alter table certifications
    add constraint FKbfsgbyyudnkdkf6julrlp6od0 foreign key (user_id) references users;
alter table comments
    add constraint FKh4c7lvsc298whoyd4w9ta25cr foreign key (post_id) references posts;
alter table comments
    add constraint FK8omq0tc18jd43bu5tjh6jvraq foreign key (user_id) references users;
alter table comments_likes
    add constraint FKogmkq8clqlxqis53e9tlu4w96 foreign key (comment_id) references comments;
alter table comments_likes
    add constraint FKiwf3mhli7ej3pgf9ktj6vv08p foreign key (user_id) references users;
alter table educations
    add constraint FKff5wc10svmgvwumia2rsfaud6 foreign key (user_id) references users;
alter table followers
    add constraint FKndvqwh40g1qt4xirl6vp2d6m6 foreign key (following_user_id) references users;
alter table followers
    add constraint FKi8o2nfxij3gj4wv568sr087dn foreign key (followed_user_id) references users;
alter table messages
    add constraint FK64w44ngcpqp99ptcb9werdfmb foreign key (chat_id) references chats;
alter table messages
    add constraint FKpsmh6clh3csorw43eaodlqvkn foreign key (user_id) references users;
alter table posts
    add constraint user_post_fk foreign key (user_id) references users;
alter table posts_likes
    add constraint FKimxtd6dl39nmu9x0snqm6mu1g foreign key (post_id) references posts;
alter table posts_likes
    add constraint FKt5kx9tu4bo443unk2n21dmshd foreign key (user_id) references users;
alter table user_has_groups
    add constraint user_has_groups_group_id_fk foreign key (group_id) references groups;
alter table user_has_groups
    add constraint user_has_groups_user_id_fk foreign key (user_id) references users;
alter table users_chats
    add constraint users_chats_chat_id_fk foreign key (chat_id) references chats;
alter table users_chats
    add constraint users_chats_user_id_fk foreign key (user_id) references users;
alter table work_places
    add constraint FKa7irgueh567s199i0g2q4y6vw foreign key (organization_id) references organizations;
alter table work_places
    add constraint FKp16rn3g2k6jpnpakvx5b0ev0u foreign key (user_id) references users;
