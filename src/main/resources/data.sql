INSERT INTO USERS (first_name, last_name, phone_number, email, age, password_hash, avatar_url, created_date,
                   modified_date)
VALUES ('Richard', 'West', '+380502926823', 'test@gmail.com', 20, '$2a$10$VyCoVteS/iZ/5ZYTIGI0EOZEytTbZphdioSm0uXqNCQ29vK6giI0q',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1628417806/linkedin/avatars/lym68lkrrt61xno2ybhn.jpg',
        timestamp '2015-01-01 18:22:32.123123', CURRENT_DATE),
       ('Frank', 'Jackson', '+380674974924', 'test2@gmail.com', 32, '$2a$10$ihFhDPp8TDs72rrtlD5tIewV7D6dvNGMXatbBz7e9zmrLDsHhai/O',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1628417806/linkedin/avatars/kgpkn4a4fudfjpebyegx.jpg',
        timestamp '2015-03-03 22:22:32.123123', CURRENT_DATE),
       ('Laura', 'Lee', '+380677623175', 'laura@gmail.com', 62, 'passwordHashed3',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1628417806/linkedin/avatars/p1qwriz6hzjgwkaihwpa.jpg',
        timestamp '2015-03-23 11:13:12.123123', CURRENT_DATE),
       ('Everett', 'Anderson', '+380507501193', 'everetta@gmail.com', 62, 'passwordHashed4',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1628417806/linkedin/avatars/i1bzhpqac3i1ld2urju8.jpg',
        timestamp '2015-05-11 22:21:12.123123', CURRENT_DATE),
       ('Katherine', 'McCarthy', '+380508791965', 'k_mccarthy@gmail.com', 32, 'passwordHashed5',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1628417806/linkedin/avatars/hj8sulgxxo5ywotggkcy.jpg',
        timestamp '2015-08-12 07:32:31.123123', CURRENT_DATE),
       ('James', 'Ford', '+380952051202', 'james_f@gmail.com', 43, 'passwordHashed6',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1628417806/linkedin/avatars/oevdjvez2wqekez5zbyp.jpg',
        timestamp '2016-02-02 12:23:31.123123', CURRENT_DATE),
       ('Connie', 'Johnston', '+380689978723', 'connie_j@gmail.com', 43, 'passwordHashed7',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1628418147/linkedin/avatars/ob8gmrldzy35dytcib5t.jpg',
        timestamp '2016-03-04 09:33:31.123123', CURRENT_DATE),
       ('Susan', 'Anderson', '+380506433660', 'susan_a@gmail.com', 34, 'passwordHashed8',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1628418313/linkedin/avatars/okktjt3pedvcz3zemwor.jpg',
        timestamp '2016-05-05 07:21:31.123123', CURRENT_DATE),
       ('Leonard', 'Sanders', '+380678059758', 'leos@gmail.com', 37, 'passwordHashed9',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1628418536/linkedin/avatars/urdz0mmjsvxwq7qfyuhm.jpg',
        timestamp '2016-06-23 10:21:22.123123', CURRENT_DATE),
       ('Barry', 'Evans', '+380955744442', 'barry@gmail.com', 28, 'passwordHashed10',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1628418711/linkedin/avatars/vnxm3wl3erio9ajtezlr.jpg',
        timestamp '2016-07-08 12:22:23.123123', CURRENT_DATE);


INSERT INTO ORGANIZATIONS (name, email, web_site, industry, location, specialities, founded_in_year,
                           number_of_employees, phone_number, created_date, modified_date)
VALUES ('Microsoft', 'office@microsoft.com', 'microsoft.com', 'Software development',
        'Redmond, WA, US (HQ) Microsoft Corporation One Microsoft Way',
        'OS Windows, Microsoft Access, Microsoft Excel, Microsoft Lens (mobile), Microsoft OneNote',
        1975, 166475, '+380444960310', timestamp '2014-01-20 09:00:10.111222', timestamp '2014-01-20 09:00:10.111222'),
       ('Apple', 'support@apple.com', 'apple.com', 'Computer hardware Computer software Consumer electronics',
        '1 Apple Park Way Cupertino, California, 95014-0642 United States',
        'Iphone, Ipad, MacBook', 1976, 37100, '+380442223322',
        timestamp '2015-01-20 09:00:10.111222', timestamp '2015-01-20 09:00:10.111222'),
       ('PayPal Holdings Inc.', 'support@paypal.com', 'www.paypal.com',
        'Credit cards, payment systems',
        '2211 N 1st St, San Jose, CA 95131, United States',
        'Advanced payment systems', 1999, 26500, '+380442223322',
        timestamp '2009-10-01 09:00:10.111222', timestamp '2009-10-01 09:00:10.111222'),
       ('Nova Poshta LLC', 'support@nova_poshta.ua', 'https://novaposhta.ua',
        'Nation wide delivery service',
        'Сentral Street, 12A, Kyiv, Ukraine',
        'Express delivery of documents, cargo and parcels', 2001, 28000, '+380444455563',
        timestamp '2010-01-02 09:00:10.111222', timestamp '2010-01-02 09:00:10.111222');


INSERT INTO WORK_PLACES (organization_id, user_id, position, responsibilities, date_start,
                         date_finish, created_date, modified_date)
VALUES (3, 1, 'Chief Operational Officer', 'Responsibilities list 1',
        date '2000-12-31', date '2010-06-12', CURRENT_DATE, CURRENT_DATE),
       (2, 1, 'CEO', 'Responsibilities list 2',
        date '2010-06-20', date '2013-11-22', CURRENT_DATE, CURRENT_DATE),
       (1, 1, 'Sales manager', 'Responsibilities list 3',
        date '2014-01-20', null, CURRENT_DATE, CURRENT_DATE),
       (1, 2, 'Chief Operational Officer', 'Responsibilities list 4',
        date '2000-12-31', date '2010-06-12', CURRENT_DATE, CURRENT_DATE),
       (2, 2, 'Sales manager', 'Responsibilities list 5',
        date '2010-06-20', date '2013-11-22', CURRENT_DATE, CURRENT_DATE),
       (2, 2, 'Head of CIS region', 'Responsibilities list 6',
        date '2014-01-20', null, CURRENT_DATE, CURRENT_DATE),
       (2, 3, 'Intern in UI design', 'Making design for simple UI elements',
        date '2005-01-01', date '2006-06-03', CURRENT_DATE, CURRENT_DATE),
       (2, 3, 'Designer of interfaces', 'Designing UI interfaces with team',
        date '2006-06-03', date '2010-12-05', CURRENT_DATE, CURRENT_DATE),
       (2, 3, 'Head of design Unit', 'Responsibilities list ',
        date '2010-12-05', null, CURRENT_DATE, CURRENT_DATE);


INSERT INTO POSTS (text, user_id, created_date, modified_date)
VALUES ('Post 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor varius placerat. Duis elementum mattis dui, in egestas massa hendrerit eget. Cras commodo felis erat, laoreet blandit leo hendrerit quis. Morbi diam justo, aliquam a dictum aliquam, lobortis quis sapien. Morbi luctus laoreet justo eu facilisis. Maecenas sollicitudin feugiat dui, et feugiat mauris efficitur eu. Curabitur posuere eros sed tincidunt tempor. Sed massa lectus, consequat et maximus eu, eleifend tempor justo. Curabitur in dapibus nibh. Vivamus sed risus eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean condimentum mattis turpis ac elementum. Etiam eu orci condimentum, placerat dui ac, scelerisque sem. Sed tincidunt id risus sit amet tincidunt. Nulla sed metus ex. Phasellus libero tortor, iaculis quis accumsan ac, facilisis in leo.',
        1, timestamp '2015-01-20 09:00:10.111222', timestamp '2015-01-20 09:00:10.111222'),
       ('Post 2 Nullam eu pretium nunc. Nulla facilisi. Curabitur faucibus laoreet quam, vel dictum urna porttitor et. Curabitur vitae arcu sem. Nulla dolor ante, tristique ac sem ac, scelerisque mollis lacus. Vestibulum pellentesque arcu vel massa molestie commodo. In semper ipsum eget velit fermentum, a gravida tortor fringilla. Suspendisse potenti. Mauris purus risus, porta nec facilisis in, vestibulum eget sapien. Ut lacus libero, pulvinar quis eros quis, elementum semper massa. In ut est et turpis blandit bibendum ac quis erat. Curabitur dictum pellentesque lacinia. Aenean vulputate tortor ac leo sagittis fringilla. Ut pharetra aliquet hendrerit. Curabitur ut maximus risus.',
        2, timestamp '2016-10-01 15:03:12.222323', timestamp '2016-10-01 15:03:12.222323'),
       ('Post 3 Cras maximus neque vitae dui tincidunt commodo. Mauris semper vehicula viverra. Praesent faucibus quis purus vitae pellentesque. Donec tristique iaculis gravida. Praesent pulvinar dui eget neque lacinia, quis cursus tortor dapibus. Nulla fringilla nec nisl id tincidunt. Quisque et lorem quis est maximus maximus eget ut nisi. Morbi et justo a sapien ornare auctor vehicula in elit. Suspendisse sed rutrum augue. Pellentesque ac arcu sed sapien imperdiet tempus. Ut euismod velit ac sapien aliquam commodo.',
        3, timestamp '2017-02-11 08:45:23.123323', timestamp '2017-02-11 08:45:23.123323'),
       ('Post 4 text goes here', 4, timestamp '2017-02-21 13:35:10.111222', timestamp '2017-02-21 13:35:10.111222'),
       ('Post 5 text goes here', 5, timestamp '2017-05-09 12:45:10.111222', timestamp '2017-05-09 12:45:10.111222'),
       ('Post 6 text goes here', 6, timestamp '2017-07-27 08:09:22.123123', timestamp '2017-07-27 08:09:22.123123'),
       ('Post 7 text goes here', 7, timestamp '2017-08-03 22:10:21.123123', timestamp '2017-08-03 22:10:21.123123'),
       ('Post 8 text goes here', 8, timestamp '2018-11-10 11:03:18.123123', timestamp '2018-11-10 11:03:18.123123'),
       ('Post 9 text goes here', 9, timestamp '2018-11-12 14:14:18.123123', timestamp '2018-11-12 14:14:18.123123'),
       ('Post 10 text goes here', 10, timestamp '2018-12-30 07:34:43.123123', timestamp '2018-12-30 07:34:43.123123'),
       ('Post 11 text goes here', 1, timestamp '2019-01-03 17:22:32.123123', timestamp '2019-01-03 17:22:32.123123'),
       ('Post 12 text goes here', 2, timestamp '2019-02-04 09:43:32.123123', timestamp '2019-02-04 09:43:32.123123'),
       ('Post 13 text goes here', 3, timestamp '2019-03-05 19:48:21.123123', timestamp '2019-03-05 19:48:21.123123'),
       ('Post 14 text goes here', 4, timestamp '2019-04-06 22:11:21.123123', timestamp '2019-04-06 22:11:21.123123'),
       ('Post 15 text goes here', 5, timestamp '2019-05-07 11:04:12.123123', timestamp '2019-05-07 11:04:12.123123'),
       ('Post 16 text goes here', 6, timestamp '2019-06-08 15:02:12.123123', timestamp '2019-06-08 15:02:12.123123'),
       ('Post 17 text goes here', 7, timestamp '2019-07-09 19:32:22.123123', timestamp '2019-07-09 19:32:22.123123'),
       ('Post 18 text goes here', 8, timestamp '2019-08-10 23:03:12.123123', timestamp '2019-08-10 23:03:12.123123'),
       ('Post 19 text goes here', 9, timestamp '2019-09-11 08:03:12.123123', timestamp '2019-09-11 08:03:12.123123'),
       ('Post 20 text goes here', 10, timestamp '2019-10-12 18:22:32.123123', timestamp '2019-10-12 18:22:32.123123');

INSERT INTO COMMENTS (post_id, user_id, text, created_date, modified_date)
VALUES (10, 1, 'Comment no.1 goes here.', timestamp '2021-08-08 12:11:11.111111',
        timestamp '2021-08-08 12:11:11.111111'),
       (10, 1, 'Comment no.2 goes here.', timestamp '2020-02-03 12:11:11.111111',
        timestamp '2020-02-03 12:11:11.111111'),
       (10, 1, 'Comment no.3 goes here.', timestamp '2020-03-03 12:11:11.111111',
        timestamp '2020-03-03 12:11:11.111111'),
       (9, 2, 'Comment no.4 goes here.', timestamp '2020-04-03 12:11:11.111111',
        timestamp '2020-04-03 12:11:11.111111'),
       (9, 2, 'Comment no.5 goes here.', timestamp '2020-05-03 12:11:11.111111',
        timestamp '2020-05-03 12:11:11.111111'),
       (9, 3, 'Comment no.6 goes here.', timestamp '2020-06-03 12:11:11.111111',
        timestamp '2020-06-03 12:11:11.111111'),
       (8, 3, 'Comment no.7 goes here.', timestamp '2020-07-03 12:11:11.111111',
        timestamp '2020-07-03 12:11:11.111111'),
       (8, 3, 'Comment no.8 goes here.', timestamp '2020-08-03 12:11:11.111111',
        timestamp '2020-08-03 12:11:11.111111'),
       (8, 3, 'Comment no.9 goes here.', timestamp '2020-09-03 12:11:11.111111',
        timestamp '2020-09-03 12:11:11.111111'),
       (7, 3, 'Comment no.10 goes here.', timestamp '2020-10-03 12:11:11.111111',
        timestamp '2020-10-03 12:11:11.111111'),
       (7, 4, 'Comment no.11 goes here.', timestamp '2020-11-03 12:11:11.111111',
        timestamp '2020-11-03 12:11:11.111111'),
       (7, 4, 'Comment no.12 goes here.', timestamp '2020-12-03 12:11:11.111111',
        timestamp '2020-12-03 12:11:11.111111'),
       (7, 4, 'Comment no.13 goes here.', timestamp '2021-01-01 13:09:10.123111',
        timestamp '2021-01-01 13:09:10.123111'),
       (7, 4, 'Comment no.14 goes here.', timestamp '2021-01-02 14:09:10.123111',
        timestamp '2021-01-02 14:09:10.123111'),
       (6, 4, 'Comment no.15 goes here.', timestamp '2021-01-03 15:09:10.123111',
        timestamp '2021-01-03 15:09:10.123111'),
       (6, 4, 'Comment no.16 goes here.', timestamp '2021-01-04 16:09:10.123111',
        timestamp '2021-01-04 16:09:10.123111'),
       (5, 5, 'Comment no.17 goes here.', timestamp '2021-01-05 17:09:10.123111',
        timestamp '2021-01-05 17:09:10.123111'),
       (5, 5, 'Comment no.18 for Post 5 goes here.', timestamp '2021-01-06 18:09:10.123111',
        timestamp '2021-01-06 18:09:10.123111'),
       (4, 5, 'Comment no.19 for Post 4 goes here.', timestamp '2021-01-07 19:09:10.123111',
        timestamp '2021-01-07 19:09:10.123111'),
       (3, 6, 'Comment no.20 for Post 3 goes here.', timestamp '2021-01-08 20:09:10.123111',
        timestamp '2021-01-08 20:09:10.123111'),
       (1, 3, 'Comment 1 for Post No.1', timestamp '2015-01-20 12:00:10.331222',
        timestamp '2015-01-20 12:00:10.331222'),
       (1, 5,
        'Comment 2 for Post No.1; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam venenatis accumsan.',
        timestamp '2015-01-20 19:10:13.331222', timestamp '2015-01-20 19:10:13.331222'),
       (1, 9, 'Comment 3 for Post No.1; Nullam bibendum, felis id interdum interdum, mauris urna.',
        timestamp '2015-02-14 18:02:04.111342', timestamp '2015-02-14 18:02:04.111342'),
       (2, 5, 'Comment 1 for Post No.2', timestamp '2016-10-02 11:03:12.111222',
        timestamp '2016-10-02 11:03:12.111222'),
       (2, 7,
        'Comment 2 for Post No.2; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam venenatis accumsan.',
        timestamp '2016-10-05 13:48:10.111222', timestamp '2016-10-05 13:48:10.111222');

INSERT INTO LIKES (user_id, post_id, created_date, modified_date)
VALUES (10, 1, date '2015-01-20', date '2015-01-20'),
       (9, 1, date '2015-01-20', date '2015-01-20'),
       (8, 1, date '2015-01-20', date '2015-01-20'),
       (7, 1, date '2015-01-20', date '2015-01-20'),
       (6, 1, date '2015-01-20', date '2015-01-20'),
       (5, 1, date '2015-01-20', date '2015-01-20'),
       (4, 1, date '2015-01-20', date '2015-01-20'),
       (9, 2, date '2016-10-01', date '2016-10-01'),
       (8, 3, date '2017-02-11', date '2017-02-11'),
       (7, 4, date '2017-02-21', date '2017-02-21'),
       (6, 5, date '2017-05-09', date '2017-05-09'),
       (5, 6, date '2017-07-27', date '2017-07-27'),
       (4, 7, date '2017-08-03', date '2017-08-03'),
       (3, 8, date '2018-11-10', date '2018-11-10'),
       (2, 9, date '2018-11-12', date '2018-11-12'),
       (1, 1, date '2018-12-30', date '2018-12-30'),
       (1, 2, date '2018-12-30', date '2018-12-30'),
       (1, 3, date '2018-12-30', date '2018-12-30'),
       (1, 4, date '2018-12-30', date '2018-12-30');

INSERT INTO BOOKMARKS (user_id, post_id, created_date, modified_date)
VALUES (1, 2, date '2015-01-20', date '2015-01-20'),
       (1, 3, date '2015-01-20', date '2015-01-20'),
       (1, 5, date '2015-01-20', date '2015-01-20'),
       (1, 7, date '2015-01-20', date '2015-01-20'),
       (1, 10, date '2015-01-20', date '2015-01-20'),
       (1, 11, date '2015-01-20', date '2015-01-20'),
       (1, 13, date '2015-01-20', date '2015-01-20'),
       (1, 15, date '2016-10-01', date '2016-10-01'),
       (1, 18, date '2017-02-11', date '2017-02-11'),
       (1, 20, date '2017-02-21', date '2017-02-21');

INSERT INTO EDUCATIONS (created_date, modified_date, activities,
                        date_finish, date_start, degree_received, field_of_study, school,
                        user_id, description)
VALUES (date '2018-12-30', date '2018-12-30', 'Studying hard, reading a lot',
        date '2017-07-08', date '2015-07-08', 'Phd',
        'Chemistry',
        'NY High-school for Humanitarians', 2, 'High-level of education; nice capmus; ...'),
       (date '2016-02-02', date '2016-02-02', 'Working hard; Writing scientifica articles',
        date '2011-03-03', date '2015-04-04', 'Bachelor',
        'Electronics',
        'MIT', 1, 'High-level of education; nice capmus; ...'),
       (date '2020-04-05', date '2020-04-05', 'Doing mathematical calculations all day long',
        date '2019-03-03', date '2017-03-03', 'Msc',
        'Math',
        'Michigan state University', 1, 'Best calculus ever');

INSERT INTO CERTIFICATIONS (created_date, modified_date, credential_id,
                            credential_url, expiration_date, has_expiry_date, issue_date, issuing_organization,
                            name, user_id)
VALUES (date '2018-12-30', date '2018-12-30', 'PS35092', 	'dan-it.com.ua',
        date '2025-07-08', true,  date '2016-07-08', 'DAN-IT', 'Spring data jpa', 1),
       (date '2018-12-30', date '2018-12-30', 'PS35092', 	'dan-it.com.ua',
        date '2025-07-08', true,  date '2016-07-08', 'DAN-IT', 'Spring data jpa', 1),
       (date '2018-12-30', date '2018-12-30', 'PS35092', 	'dan-it.com.ua',
        date '2025-07-08', true,  date '2016-07-08', 'DAN-IT', 'Spring data jpa', 2);

INSERT INTO CHATS (created_date, modified_date)
VALUES (date '2015-01-20', date '2015-01-20'),
       (date '2015-01-20', date '2015-01-20'),
       (date '2015-01-20', date '2015-01-20'),
       (date '2015-01-20', date '2015-01-20');


INSERT INTO USERS_CHATS (user_id, chat_id)
VALUES (1, 1),
       (2, 1),
       (1, 2),
       (3, 2),
       (1, 3),
       (4, 3),
       (1, 4),
       (5, 4);

INSERT INTO MESSAGES (created_date, modified_date, text, chat_id, user_id)
VALUES (date '2015-01-20', date '2015-01-20', 'Message text', 1, 1),
       (date '2015-01-20', date '2015-01-20', 'Message text2', 1, 2),
       (date '2015-01-20', date '2015-01-20', 'Message text3', 2, 1),
       (date '2015-01-20', date '2015-01-20', 'Message text4', 2, 3),
       (date '2015-01-20', date '2015-01-20', 'Message text5', 2, 3),
       (date '2015-01-20', date '2015-01-20', 'Message text6', 3, 1),
       (date '2015-01-20', date '2015-01-20', 'Message text7', 3, 5),
       (date '2016-10-01', date '2016-10-01', 'Message text8', 4, 4),
       (date '2017-02-11', date '2017-02-11', 'Message text9', 4, 1),
       (date '2017-02-21', date '2017-02-21', 'Message text10', 4, 4),
       (date '2017-05-09', date '2017-05-09', 'Message text11', 4, 1);