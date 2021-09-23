INSERT INTO USERS (first_name, last_name, phone_number, email, age, password_hash, avatar_public_id,
                   profile_bg_public_id,
                   created_date, modified_date, country, city, headline)
VALUES ('Richard', 'West', '+380502926823', 'test@gmail.com', 20,
        '$2a$10$VyCoVteS/iZ/5ZYTIGI0EOZEytTbZphdioSm0uXqNCQ29vK6giI0q',
        'linkedin/avatars/npgam09ruxy6rkej2asi',
        'linkedin/profile-bg/ashpaa6vz5gnm9mylggk',
        timestamp '2015-01-01 18:22:32.123123', CURRENT_DATE, 'USA', 'New York', 'Java Developer'),
       ('Frank', 'Jackson', '+380674974924', 'test2@gmail.com', 32,
        '$2a$10$ihFhDPp8TDs72rrtlD5tIewV7D6dvNGMXatbBz7e9zmrLDsHhai/O',
        'linkedin/avatars/kgpkn4a4fudfjpebyegx',
        'linkedin/profile-bg/iltbrz2s8408pu0xrvsj',
        timestamp '2015-03-03 22:22:32.123123', CURRENT_DATE, 'Ukraine', 'Kyiv', 'Head of Sales Department'),
       ('Laura', 'Lee', '+380677623175', 'laura@gmail.com', 62, 'passwordHashed3',
        'linkedin/avatars/p1qwriz6hzjgwkaihwpa',
        'linkedin/profile-bg/o0ngvhpnbu4bz4moqklt',
        timestamp '2015-03-23 11:13:12.123123', CURRENT_DATE, 'Spain', 'Barcelona', 'Senior Java Developer'),
       ('Everett', 'Anderson', '+380507501193', 'everetta@gmail.com', 62, 'passwordHashed4',
        'linkedin/avatars/i1bzhpqac3i1ld2urju8', '',
        timestamp '2015-05-11 22:21:12.123123', CURRENT_DATE, 'USA', 'Los Angelos', 'Frontend Developer'),
       ('Katherine', 'McCarthy', '+380508791965', 'k_mccarthy@gmail.com', 32, 'passwordHashed5',
        'linkedin/avatars/hj8sulgxxo5ywotggkcy', '',
        timestamp '2015-08-12 07:32:31.123123', CURRENT_DATE, 'Ukraine', 'Lviv', 'HR Director'),
       ('James', 'Ford', '+380952051202', 'james_f@gmail.com', 43, 'passwordHashed6',
        'linkedin/avatars/oevdjvez2wqekez5zbyp', '',
        timestamp '2016-02-02 12:23:31.123123', CURRENT_DATE, 'Great Britain', 'London', 'Lead QA Engineer'),
       ('Connie', 'Johnston', '+380689978723', 'connie_j@gmail.com', 43, 'passwordHashed7',
        'linkedin/avatars/ob8gmrldzy35dytcib5t', '',
        timestamp '2016-03-04 09:33:31.123123', CURRENT_DATE, 'Germany', 'Berlin', 'Full Stack Developer'),
       ('Susan', 'Anderson', '+380506433660', 'susan_a@gmail.com', 34, 'passwordHashed8',
        'linkedin/avatars/okktjt3pedvcz3zemwor', '',
        timestamp '2016-05-05 07:21:31.123123', CURRENT_DATE, 'Germany', 'Munich', 'Node.js Developer'),
       ('Leonard', 'Sanders', '+380678059758', 'leos@gmail.com', 37, 'passwordHashed9',
        'linkedin/avatars/urdz0mmjsvxwq7qfyuhm', '',
        timestamp '2016-06-23 10:21:22.123123', CURRENT_DATE, 'Ukraine', 'Kharkiv', 'Junior Java Developer'),
       ('Barry', 'Evans', '+380955744442', 'barry@gmail.com', 28, 'passwordHashed10',
        'linkedin/avatars/vnxm3wl3erio9ajtezlr', '',
        timestamp '2016-07-08 12:22:23.123123', CURRENT_DATE, 'Canada', 'Ottawa', 'React Developer');


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
       ('LinkedIn', 'office@linkedin.com', 'https://linkedin.com', 'Internet', 'Sunnyvale, CA, US',
        'Online Professional Network, Jobs, People Search, Company Search, Address Book, Advertising, Professional Identity, and Group Collaboration',
        2003, 21499, '+380442223322', timestamp '2009-10-01 09:00:10.111222', timestamp '2009-10-01 09:00:10.111222'),
       ('Nova Poshta LLC', 'support@nova_poshta.ua', 'https://novaposhta.ua',
        'Nation wide delivery service',
        'Сentral Street, 12A, Kyiv, Ukraine',
        'Express delivery of documents, cargo and parcels', 2001, 28000, '+380444455563',
        timestamp '2010-01-02 09:00:10.111222', timestamp '2010-01-02 09:00:10.111222'),
       ('HQSoftware', 'usa@hqsoftwarelab.com', 'https://hqsoftwarelab.com', 'Software product development',
        '315 Madison Avenue #3045, New York City, United States',
        'IoT Solutions, Automotive IoT, Industrial IoT', 2001, 160, '917 720 3806',
        timestamp '2014-01-20 09:00:10.111222', timestamp '2014-01-20 09:00:10.111222'),
       ('Amazon.com', 'office@amazon.com', 'https://amazon.com', 'eCommerce', 'Seattle, Washington, US',
        'Internet or Mobile App Based Business, Cloud Services',
        1994, 1300000, '+380442223322', timestamp '2007-10-01 09:00:10.111222', timestamp '2007-10-01 09:00:10.111222'),
       ('Facebook', 'support@fb.com', 'www.facebook.com',
        'Social media',
        '1 Hacker Way, Menlo Park, CA 94025, United States',
        'Communication Services, Internet or Mobile App Based Business', 2004, 60600, '+1-650-543-4800',
        timestamp '2005-10-01 09:00:10.111222', timestamp '2005-10-01 09:00:10.111222'),
       ('Oracle corporation', 'support@oracle.com', 'www.oracle.com',
        'Software and IT',
        'Austin, Texas, United States',
        'Oracle Applications, Oracle, DatabaseOracle, CloudEnterprise, ManagerFusion, MiddlewareServers, Workstations, Storage',
        1977, 133000, '+1-800-633-0738',
        timestamp '203-10-01 09:00:10.111222', timestamp '2003-10-01 09:00:10.111222');


INSERT INTO WORK_PLACES (organization_id, user_id, position, responsibilities, date_start,
                         date_finish, is_currently_employed, created_date, modified_date)
VALUES (3, 1, 'Chief Operational Officer',
        'Quisque id rhoncus mauris. Phasellus quis diam aliquet, gravida massa in, suscipit felis. Aliquam ac turpis arcu. Nunc fermentum dui augue, et aliquam eros ullamcorper imperdiet.',
        date '2000-12-31', date '2010-06-12', false, CURRENT_DATE, CURRENT_DATE),
       (2, 1, 'CEO',
        'Fusce lacinia, nisl et vestibulum ultricies, orci risus luctus urna, et consectetur sem nibh non mauris. Phasellus ac aliquam libero, eu luctus lorem. Nulla tempor risus eu tortor mattis, id eleifend tellus semper. ',
        date '2010-06-20', date '2013-11-22', false, CURRENT_DATE, CURRENT_DATE),
       (1, 1, 'Sales manager',
        'Phasellus vitae interdum mauris, eget luctus neque. Aenean at venenatis mauris, venenatis convallis velit. Suspendisse hendrerit lectus dolor, sit amet tristique odio lobortis sit amet. Donec ante purus, ',
        date '2014-01-20', null, true, CURRENT_DATE, CURRENT_DATE),
       (1, 2, 'Chief Operational Officer',
        'Volutpat eget metus sit amet, volutpat blandit felis. Sed faucibus ante urna, quis consequat mi semper et. Duis faucibus felis nulla, et hendrerit turpis pharetra eu.',
        date '2000-12-31', date '2010-06-12', false, CURRENT_DATE, CURRENT_DATE),
       (2, 2, 'Sales manager', 'Responsibilities list 5',
        date '2010-06-20', date '2013-11-22', false, CURRENT_DATE, CURRENT_DATE),
       (2, 2, 'Head of CIS region', 'Responsibilities list 6',
        date '2014-01-20', null, true, CURRENT_DATE, CURRENT_DATE),
       (2, 3, 'Intern in UI design', 'Making design for simple UI elements',
        date '2005-01-01', date '2006-06-03', false, CURRENT_DATE, CURRENT_DATE),
       (2, 3, 'Designer of interfaces', 'Designing UI interfaces with team',
        date '2006-06-03', date '2010-12-05', false, CURRENT_DATE, CURRENT_DATE),
       (2, 3, 'Head of design Unit', 'Responsibilities list ',
        date '2010-12-05', null, true, CURRENT_DATE, CURRENT_DATE);


INSERT INTO POSTS (text, user_id, img_public_id, video_public_id, created_date, modified_date)
VALUES ('Post 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor varius placerat. Duis elementum mattis dui, in egestas massa hendrerit eget. Cras commodo felis erat, laoreet blandit leo hendrerit quis. Morbi diam justo, aliquam a dictum aliquam, lobortis quis sapien. Morbi luctus laoreet justo eu facilisis. Maecenas sollicitudin feugiat dui, et feugiat mauris efficitur eu. Curabitur posuere eros sed tincidunt tempor. Sed massa lectus, consequat et maximus eu, eleifend tempor justo. Curabitur in dapibus nibh. Vivamus sed risus eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean condimentum mattis turpis ac elementum. Etiam eu orci condimentum, placerat dui ac, scelerisque sem. Sed tincidunt id risus sit amet tincidunt. Nulla sed metus ex. Phasellus libero tortor, iaculis quis accumsan ac, facilisis in leo.',
        1, 'linkedin/posts-img/q2wo3dud8ztniakfo3ft', '', timestamp '2015-01-20 09:00:10.111222',
        timestamp '2015-01-20 09:00:10.111222'),
       ('Post 2 Nullam eu pretium nunc. Nulla facilisi. Curabitur faucibus laoreet quam, vel dictum urna porttitor et. Curabitur vitae arcu sem. Nulla dolor ante, tristique ac sem ac, scelerisque mollis lacus. Vestibulum pellentesque arcu vel massa molestie commodo. In semper ipsum eget velit fermentum, a gravida tortor fringilla. Suspendisse potenti. Mauris purus risus, porta nec facilisis in, vestibulum eget sapien. Ut lacus libero, pulvinar quis eros quis, elementum semper massa. In ut est et turpis blandit bibendum ac quis erat. Curabitur dictum pellentesque lacinia. Aenean vulputate tortor ac leo sagittis fringilla. Ut pharetra aliquet hendrerit. Curabitur ut maximus risus.',
        2, 'linkedin/posts-img/n6znpu6xjzqmexjqhnkg', '', timestamp '2016-10-01 15:03:12.222323',
        timestamp '2016-10-01 15:03:12.222323'),
       ('Post 3 Cras maximus neque vitae dui tincidunt commodo. Mauris semper vehicula viverra. Praesent faucibus quis purus vitae pellentesque. Donec tristique iaculis gravida. Praesent pulvinar dui eget neque lacinia, quis cursus tortor dapibus. Nulla fringilla nec nisl id tincidunt. Quisque et lorem quis est maximus maximus eget ut nisi. Morbi et justo a sapien ornare auctor vehicula in elit. Suspendisse sed rutrum augue. Pellentesque ac arcu sed sapien imperdiet tempus. Ut euismod velit ac sapien aliquam commodo.',
        3, '', '', timestamp '2017-02-11 08:45:23.123323', timestamp '2017-02-11 08:45:23.123323'),
       ('Post 4 text goes here', 4, '', '',
        timestamp '2017-02-21 13:35:10.111222',
        timestamp '2017-02-21 13:35:10.111222'),
       ('Post 5 text goes here', 5, '', '', timestamp '2017-05-09 12:45:10.111222',
        timestamp '2017-05-09 12:45:10.111222'),
       ('Post 6 text goes here', 6, '', '', timestamp '2017-07-27 08:09:22.123123',
        timestamp '2017-07-27 08:09:22.123123'),
       ('Post 7 text goes here', 7, '', '', timestamp '2017-08-03 22:10:21.123123',
        timestamp '2017-08-03 22:10:21.123123'),
       ('Post 8 text goes here', 8, '', '', timestamp '2018-11-10 11:03:18.123123',
        timestamp '2018-11-10 11:03:18.123123'),
       ('Post 9 text goes here', 9, '', '', timestamp '2018-11-12 14:14:18.123123',
        timestamp '2018-11-12 14:14:18.123123'),
       ('Post 10 text goes here', 10, '', '', timestamp '2018-12-30 07:34:43.123123',
        timestamp '2018-12-30 07:34:43.123123'),
       ('Post 11 text goes here', 1, '', '', timestamp '2019-01-03 17:22:32.123123',
        timestamp '2019-01-03 17:22:32.123123'),
       ('Post 12 text goes here', 2, 'linkedin/posts-img/n6znpu6xjzqmexjqhnkg', '',
        timestamp '2019-02-04 09:43:32.123123',
        timestamp '2019-02-04 09:43:32.123123'),
       ('Post 13 text goes here', 3, '', '', timestamp '2019-03-05 19:48:21.123123',
        timestamp '2019-03-05 19:48:21.123123'),
       ('Post 14 text goes here', 4, '', '', timestamp '2019-04-06 22:11:21.123123',
        timestamp '2019-04-06 22:11:21.123123'),
       ('Post 15 text goes here', 5, '', '', timestamp '2019-05-07 11:04:12.123123',
        timestamp '2019-05-07 11:04:12.123123'),
       ('Post 16 text goes here', 6, '', '', timestamp '2019-06-08 15:02:12.123123',
        timestamp '2019-06-08 15:02:12.123123'),
       ('“We need new perspectives, different ideas and broader ways of thinking to solve the big problems of our time. This is where a neurodiverse workforce can really benefit a business.”

Fantastic to see auticon''s 2020 Global Impact Report highlight just how important it is to embrace neurodiversity in the workplace. ',
        7, 'linkedin/posts-img/a9uxdzhs88h5tqf29p5h', '', timestamp '2019-07-09 19:32:22.123123',
        timestamp '2019-07-09 19:32:22.123123'),

       ('Every year, I get the opportunity to meet the Washington Teacher of the Year. And every time, I’m blown away by the brilliant, thoughtful educators that my home state picks. Still, I went into my meeting this year with higher expectations than normal. 2020 was the most challenging year ever for teachers, and I knew that anyone who earned this honor while teaching through a pandemic must be truly exceptional.
        My meeting with Brooke Brown did not disappoint. She is an extraordinary teacher who has helped her students adapt to extraordinary times.' ||
        'Brooke teaches ethnic studies and English to high school seniors at Washington High School, which is located just outside of Tacoma. Nearly two-thirds of the kids at her school are students of color, and over half are eligible for free lunch. Her ethnic studies class counts as a social studies credit and has been a popular choice since the school started offering it two years ago. More students sign up to take it every semester than her classroom can accommodate.
        My school didn’t have ethnic studies when I was growing up, so I was curious to learn more about how Brooke approaches the subject. “We’re really looking at things like identity and race,” she says. “We’re historicizing where we are today by looking at the past and helping our students have a lens to understand what’s going on. It’s a lot about my students learning how to love themselves and their own past as we work to build a more beautiful future that includes all people.”',
        8, 'linkedin/posts-img/vfuwj3kmkmwnmszekdvw', '', timestamp '2019-08-10 23:03:12.123123',
        timestamp '2019-08-10 23:03:12.123123'),
       ('Joe Rogan has signed an exclusive deal with Spotify, which will see his podcast, The Joe Rogan Experience, disappear from all other platforms.
        The multi-year deal is believed to be worth $100m (£82 million), according to the Wall Street Journal.
        Rogan''s podcast, which is one of the most popular in the world, will arrive on the streaming giant on 1 September.
        It will then be housed there exclusively by the end of the year, and removed from all other platforms.
        "It will remain free, and it will be the exact same show," said Rogan. "It''s just a licensing deal, so Spotify won''t have any creative control over the show.
        "They want me to just continue doing it the way I''m doing it right now.
        "I''m excited to have the support of the largest audio platform in the world and I hope you folks are there when we make the switch!',
        9, 'linkedin/posts-img/qxfrvuen67dc9xavmlhf', '', timestamp '2019-09-11 08:03:12.123123',
        timestamp '2019-09-11 08:03:12.123123'),
       ('The Indian government is providing comprehensive support to Tesla to help it develop in the local market and provide support for possible production departments.
          On September 21, it is reported that Tesla is negotiating with the industrial sector of the Karnataka government, ' ||
        'hoping to establish a research and development center in Bangalore to take advantage of the potential of India''s technology capital.' ||
        'The first proposal was to establish an R&D center in India, and at least two rounds of discussions have been conducted. Tesla’s head of ' ||
        'India and the Karnataka State Industrial Commissioner will meet again this month. Gaurav Gupta, chief secretary of the Karnataka State ' ||
        'Commercial and Industrial Department, said that the government will provide support for Tesla''s establishment of R&D centers and manufacturing ' ||
        'departments, although he did not elaborate on what this might mean. India will provide Tesla with all the support for the establishment of R&D centers and manufacturing plants. Bangalore has an ecosystem conducive to the use of electric vehicles.

Currently, India is building electric vehicle charging infrastructure because it hopes to increasingly develop towards sustainable energy and transportation. However, analysts believe that due to the cost of cars and the country’s lack of electric vehicle infrastructure, Tesla’s large-scale entry into the Indian market should be suppressed.',
        10, 'linkedin/posts-img/v9ogrvn4ib0cscsnaxwr', '', timestamp '2019-10-12 18:22:32.123123',
        timestamp '2019-10-12 18:22:32.123123'),
       ('Continuous Integration (CI) and Continuous Delivery (CD) are popular software development practices for automation and shortening feedback times. However, setup improperly, your CI/CD Pipelines could instead reduce the quality of your code and cause delays in development.
         For that reason, it is important that you follow Continuous Integration and Continuous Delivery best practices for software development. This includes using the Continuous Integration tool — like Klocwork — that will be able to perform Continuous Integration testing and support CI/CD Pipelines.',
        2, '', '',
        timestamp '2021-05-12 13:35:10.111222',
        timestamp '2021-05-12 13:35:10.111222'),
--     Video for this post:   linkedin/posts-video/pmkt82hfcqn3hq5tmgwv

       ('Storrors first was crossing from Europe to Asia by parkour. Bring your next first to life with Canon.',
        5, '', '',
        timestamp '2021-05-22 13:35:10.111222',
        timestamp '2021-05-22 13:35:10.111222'),
--     Video for this post:   linkedin/posts-video/gh6b5qyonkfwxoijufs7

       ('New fashion trend is coming... A black and white outfit is the universal answer to every dressing dilemma. Feeling underdressed? Swap your look for something in solid black and feel instantly confident. Unclear dress code? All those fashion magazines you read in high school were right, a little black dress really is your safest bet. Want to feel polished at a picnic? Throw on an ensemble of entirely white pieces and try not to spill.

There’s something incredibly stylish about streamlining your outfit options with black and white pieces. Silhouettes have the chance to shine, for one. And the outfits carry a timelessness, giving you a green light for investing in pieces that will last for many a dressing dilemma to come. Keep reading for tips on how to wear black and white.',
        6, '', 'linkedin/posts-video/vndq3cf3l1jbancxly0k', timestamp '2021-07-12 18:22:32.123123',
        timestamp '2021-07-12 18:22:32.123123');
--        ('Do you dream of becoming a great specialist in IT sphere?',
--         2, '', 'linkedin/posts-video/xtkqkvhnfqurfibwksst', timestamp '2021-08-12 18:22:32.123123',
--         timestamp '2021-08-12 18:22:32.123123');


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

INSERT INTO POSTS_LIKES (user_id, post_id, created_date, modified_date)
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
VALUES (date '2014-10-02', date '2014-10-02', 'Studying Data-structures and algorithms',
        date '2014-01-01', date '2013-01-01', 'Graduate',
        'Programming',
        'NY Programming with MARK courses', 2, 'Highly intensive programming courses'),
       (date '2018-12-30', date '2018-12-30', 'Studying hard, reading a lot',
        date '2017-07-08', date '2015-07-08', 'Phd',
        'Chemistry',
        'NY High-school for Humanitarians', 2, 'High-level of education; nice capmus; ...'),
       (date '2016-02-02', date '2016-02-02', 'Working hard; Writing scientifica articles',
        date '2015-04-04', date '2011-03-03', 'Bachelor',
        'Electronics',
        'MIT', 1, 'High-level of education; nice capmus; ...'),
       (date '2020-04-05', date '2020-04-05', 'Doing mathematical calculations all day long',
        date '2019-03-03', date '2017-03-03', 'Msc',
        'Math',
        'Michigan state University', 1, 'Best calculus ever'),
       (date '2016-02-02', date '2016-02-02', 'Studying best practices of Financial Analysis',
        date '2016-03-05', date '2012-01-02', 'Bachelor',
        'Economy and Finance',
        'Mount Royal University', 3,
        'Studying  risk management and behavioral finance principles to understand the real-world functioning of securities, insurance, and banking industries.'),
       (date '2020-04-05', date '2020-04-05', 'Studying best practices of Financial Analysis',
        date '2019-03-03', date '2017-03-03', 'Msc',
        'Economy and Finance',
        'University of Calgary', 4,
        'Learning ideas, methods, and institutions that permit human society to manage risks and foster enterprise. Emphasis on financially-savvy leadership skills. ');

INSERT INTO CERTIFICATIONS (created_date, modified_date, credential_id,
                            credential_url, expiration_date, has_expiry_date, issue_date, issuing_organization,
                            name, user_id)
VALUES (date '2018-12-30', date '2018-12-30', 'PS35092', 'https://dan-it.com.ua',
        date '2026-01-01', true, date '2016-01-01', 'DAN-IT', 'Spring data jpa', 1),
       (date '2019-08-03', date '2019-08-03', 'RQ3627AS', 'https://unilever.ua',
        null, false, date '2017-07-08', 'Unilever', 'On-site practice', 1),
       (date '2018-04-03', date '2018-04-03', 'MK98123HAP', 'https://dan-it.com.ua',
        date '2025-07-08', true, date '2016-07-08', 'DAN-IT', 'Spring data jpa', 2),
       (date '2018-04-03', date '2018-04-03', 'MK98123HAP', 'https://dan-it.com.ua',
        date '2023-03-02', true, date '2016-03-06', 'DAN-IT', 'Mongo DB course', 2),
       (date '2018-04-03', date '2018-04-03', 'FG8892348', 'https://www.udemy.com/',
        date '2025-07-08', true, date '2016-07-08', 'UDEMY', 'Financial accounting for entrepreneurs', 3),
       (date '2018-04-03', date '2018-04-03', 'JK9928402', 'https://www.udemy.com/',
        date '2023-03-02', true, date '2016-03-06', 'UDEMY', 'Soft skills upgrade', 3),
       (date '2018-04-03', date '2018-04-03', 'OP2983849', 'https://www.udemy.com/',
        date '2025-07-08', true, date '2016-07-08', 'UDEMY', 'Interpersonal communications', 4),
       (date '2018-04-03', date '2018-04-03', 'MW99128430', 'https://www.udemy.com/',
        date '2023-03-02', true, date '2016-03-06', 'UDEMY', 'Software development', 4);

INSERT INTO CHATS (created_date, modified_date)
VALUES (date '2015-01-20', date '2015-01-20'),
       (date '2015-01-20', date '2015-01-20'),
       (date '2015-01-20', date '2015-01-20'),
       (date '2015-01-20', date '2015-01-20');


INSERT INTO USERS_CHATS (user_id, chat_id)
VALUES (1, 1),
       (2, 1),
       (1, 2),
       (3, 2);

INSERT INTO MESSAGES (created_date, modified_date, text, chat_id, user_id)
VALUES (date '2015-01-20', date '2015-01-20', 'Message text', 1, 1),
       (date '2015-01-20', date '2015-01-20', 'Message text2', 1, 2),
       (date '2015-01-20', date '2015-01-20', 'Message text3', 2, 1),
       (date '2015-01-20', date '2015-01-20', 'Message text4', 2, 3),
       (date '2015-01-20', date '2015-01-20', 'Message text5', 2, 3);
