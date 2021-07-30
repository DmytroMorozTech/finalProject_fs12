INSERT INTO USERS (first_name, last_name, phone_number, email, age, password_hash, avatar_url, created_date,
                   modified_date)
VALUES ('Richard', 'West', '+380502926823', 'richard@gmail.com', 20, 'passwordHashed1',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('Frank', 'Jackson', '+380674974924', 'frank@gmail.com', 32, 'passwordHashed2',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
        CURRENT_DATE, CURRENT_DATE),
       ('Laura', 'Lee', '+380677623175', 'laura@gmail.com', 62, 'passwordHashed3',
        'https://res.cloudinary.com/dan-insta-step/image/upload/v1603372884/instagram/avatars/user_7_avatar_h4jghf.jpg',
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


INSERT INTO ORGANIZATIONS (name, email, industry, specialities, web_site, founded_in_year,
                           number_of_employees, phone_number, created_date, modified_date)
VALUES ('Microsoft', 'office@microsoft.com', 'Software development',
        'OS Windows, Microsoft Access, Microsoft Excel, Microsoft Lens (mobile), Microsoft OneNote',
        'microsoft.com', 1975, 166475, '+380444960310', date '2014-01-20', date '2021-01-20'),
       ('Apple', 'support@apple.com', 'Computer hardware Computer software Consumer electronics',
        'Iphone, Ipad, MacBook', 'apple.com', 1976, 37100, '+380442223322', date '2015-01-20', date '2021-01-12');


INSERT INTO WORK_PLACES (name, organization_id, user_id, location, position, responsibilities, date_start,
                         date_finish, created_date, modified_date)
VALUES ('CompanyName1', null, 1, 'Location of company_no.1', 'Chief Operational Officer', 'Responsibilities list 1',
        date '2000-12-31', date '2010-06-12', CURRENT_DATE, CURRENT_DATE),
       ('CompanyName2', null, 1, 'Location of company_no.2', 'CEO', 'Responsibilities list 2',
        date '2010-06-20', date '2013-11-22', CURRENT_DATE, CURRENT_DATE),
       ('CompanyName3', null, 1, 'Location of company_no.3', 'Sales manager', 'Responsibilities list 3',
        date '2014-01-20', null, CURRENT_DATE, CURRENT_DATE);


INSERT INTO POSTS (text, user_id, created_date, modified_date)
VALUES ('Post 1 text goes here', 1, date '2015-01-20', date '2015-01-20'),
       ('Post 2 text goes here', 2, date '2016-10-01', date '2016-10-01'),
       ('Post 3 text goes here', 3, date '2017-02-11', date '2017-02-11'),
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
       (1, 10, date '2018-12-30', date '2018-12-30');