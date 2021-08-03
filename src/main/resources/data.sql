INSERT INTO USERS (first_name, last_name, phone_number, email, age, password_hash, avatar_url, created_date,
                   modified_date)
VALUES ('Richard', 'West', '+380502926823', 'richard@gmail.com', 20, 'passwordHashed1',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('Frank', 'Jackson', '+380674974924', 'frank@gmail.com', 32, 'passwordHashed2',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_2_avatar_nltrmp.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('Laura', 'Lee', '+380677623175', 'laura@gmail.com', 62, 'passwordHashed3',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_4_avatar_o6hvwu.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('Everett', 'Anderson', '+380507501193', 'everetta@gmail.com', 62, 'passwordHashed4',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('Katherine', 'McCarthy', '+380508791965', 'k_mccarthy@gmail.com', 32, 'passwordHashed5',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('James', 'Ford', '+380952051202', 'james_f@gmail.com', 43, 'passwordHashed6',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('Connie', 'Johnston', '+380689978723', 'connie_j@gmail.com', 43, 'passwordHashed7',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('Susan', 'Anderson', '+380506433660', 'susan_a@gmail.com', 34, 'passwordHashed8',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('Leonard', 'Sanders', '+380678059758', 'leos@gmail.com', 32, 'passwordHashed9',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('Barry', 'Evans', '+380955744442', 'barry@gmail.com', 55, 'passwordHashed10',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
        CURRENT_DATE, CURRENT_DATE);


INSERT INTO ORGANIZATIONS (name, email, web_site, industry, location, specialities, founded_in_year,
                           number_of_employees, phone_number, created_date, modified_date)
VALUES ('Microsoft', 'office@microsoft.com', 'microsoft.com', 'Software development',
        'Redmond, WA, US (HQ) Microsoft Corporation One Microsoft Way',
        'OS Windows, Microsoft Access, Microsoft Excel, Microsoft Lens (mobile), Microsoft OneNote',
        1975, 166475, '+380444960310', date '2014-01-20', date '2021-01-20'),
       ('Apple', 'support@apple.com', 'apple.com', 'Computer hardware Computer software Consumer electronics',
        '1 Apple Park Way Cupertino, California, 95014-0642 United States',
        'Iphone, Ipad, MacBook', 1976, 37100, '+380442223322', date '2015-01-20', date '2021-01-12'),
       ('PayPal Holdings Inc.', 'support@paypal.com', 'www.paypal.com',
        'Credit cards, payment systems',
        '2211 N 1st St, San Jose, CA 95131, United States',
        'Advanced payment systems', 1999, 26500, '+380442223322', date '2010-01-02', date '2021-01-12');


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
        1, date '2015-01-20', date '2015-01-20'),
       ('Post 2 Nullam eu pretium nunc. Nulla facilisi. Curabitur faucibus laoreet quam, vel dictum urna porttitor et. Curabitur vitae arcu sem. Nulla dolor ante, tristique ac sem ac, scelerisque mollis lacus. Vestibulum pellentesque arcu vel massa molestie commodo. In semper ipsum eget velit fermentum, a gravida tortor fringilla. Suspendisse potenti. Mauris purus risus, porta nec facilisis in, vestibulum eget sapien. Ut lacus libero, pulvinar quis eros quis, elementum semper massa. In ut est et turpis blandit bibendum ac quis erat. Curabitur dictum pellentesque lacinia. Aenean vulputate tortor ac leo sagittis fringilla. Ut pharetra aliquet hendrerit. Curabitur ut maximus risus.',
        2, date '2016-10-01', date '2016-10-01'),
       ('Post 3 Cras maximus neque vitae dui tincidunt commodo. Mauris semper vehicula viverra. Praesent faucibus quis purus vitae pellentesque. Donec tristique iaculis gravida. Praesent pulvinar dui eget neque lacinia, quis cursus tortor dapibus. Nulla fringilla nec nisl id tincidunt. Quisque et lorem quis est maximus maximus eget ut nisi. Morbi et justo a sapien ornare auctor vehicula in elit. Suspendisse sed rutrum augue. Pellentesque ac arcu sed sapien imperdiet tempus. Ut euismod velit ac sapien aliquam commodo.',
        3, date '2017-02-11', date '2017-02-11'),
       ('Post 4 text goes here', 4, date '2017-02-21', date '2017-02-21'),
       ('Post 5 text goes here', 5, date '2017-05-09', date '2017-05-09'),
       ('Post 6 text goes here', 6, date '2017-07-27', date '2017-07-27'),
       ('Post 7 text goes here', 7, date '2017-08-03', date '2017-08-03'),
       ('Post 8 text goes here', 8, date '2018-11-10', date '2018-11-10'),
       ('Post 9 text goes here', 9, date '2018-11-12', date '2018-11-12'),
       ('Post 10 text goes here', 10, date '2018-12-30', date '2018-12-30'),
       ('Post 11 text goes here', 1, date '2019-01-03', date '2019-01-03'),
       ('Post 12 text goes here', 2, date '2019-02-04', date '2019-02-04'),
       ('Post 13 text goes here', 3, date '2019-03-05', date '2019-03-05'),
       ('Post 14 text goes here', 4, date '2019-04-06', date '2019-04-06'),
       ('Post 15 text goes here', 5, date '2019-05-07', date '2019-05-07'),
       ('Post 16 text goes here', 6, date '2019-06-08', date '2019-06-08'),
       ('Post 17 text goes here', 7, date '2019-07-09', date '2019-07-09'),
       ('Post 18 text goes here', 8, date '2019-08-10', date '2019-08-10'),
       ('Post 19 text goes here', 9, date '2019-09-11', date '2019-09-11'),
       ('Post 20 text goes here', 10, date '2019-10-12', date '2019-10-12');

INSERT INTO COMMENTS (text, created_date, modified_date)
VALUES ('Comment no.1 goes here.', date '2020-01-03', date '2020-01-03'),
       ('Comment no.2 goes here.', date '2020-02-03', date '2020-02-03'),
       ('Comment no.3 goes here.', date '2020-03-03', date '2020-03-03'),
       ('Comment no.4 goes here.', date '2020-04-03', date '2020-04-03'),
       ('Comment no.5 goes here.', date '2020-05-03', date '2020-05-03'),
       ('Comment no.6 goes here.', date '2020-06-03', date '2020-06-03'),
       ('Comment no.7 goes here.', date '2020-07-03', date '2020-07-03'),
       ('Comment no.8 goes here.', date '2020-08-03', date '2020-08-03'),
       ('Comment no.9 goes here.', date '2020-09-03', date '2020-09-03'),
       ('Comment no.10 goes here.', date '2020-10-03', date '2020-10-03'),
       ('Comment no.11 goes here.', date '2020-11-03', date '2020-11-03'),
       ('Comment no.12 goes here.', date '2020-12-03', date '2020-12-03'),
       ('Comment no.13 goes here.', date '2021-01-01', date '2021-01-01'),
       ('Comment no.14 goes here.', date '2021-01-02', date '2021-01-02'),
       ('Comment no.15 goes here.', date '2021-01-03', date '2021-01-03'),
       ('Comment no.16 goes here.', date '2021-01-04', date '2021-01-04'),
       ('Comment no.17 goes here.', date '2021-01-05', date '2021-01-05'),
       ('Comment no.18 goes here.', date '2021-01-06', date '2021-01-06'),
       ('Comment no.19 goes here.', date '2021-01-07', date '2021-01-07'),
       ('Comment no.20 goes here.', date '2021-01-08', date '2021-01-08');

INSERT INTO REL_USER_COMMENTS (user_id, comment_id)
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (2, 4),
       (2, 5),
       (3, 6),
       (3, 7),
       (3, 8),
       (3, 9),
       (3, 10),
       (4, 11),
       (4, 12),
       (4, 13),
       (4, 14),
       (4, 15),
       (4, 16),
       (5, 17),
       (5, 18),
       (5, 19),
       (6, 20);

INSERT INTO REL_POST_COMMENTS (post_id, comment_id)
VALUES (10, 1),
       (10, 2),
       (10, 3),
       (9, 4),
       (9, 5),
       (9, 6),
       (8, 7),
       (8, 8),
       (8, 9),
       (7, 10),
       (7, 11),
       (7, 12),
       (7, 13),
       (7, 14),
       (6, 15),
       (6, 16),
       (5, 17),
       (5, 18),
       (4, 19),
       (3, 20);

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