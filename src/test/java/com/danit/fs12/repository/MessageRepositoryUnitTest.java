package com.danit.fs12.repository;

import com.danit.fs12.entity.bookmark.Bookmark;
import com.danit.fs12.entity.certification.Certification;
import com.danit.fs12.entity.chat.Chat;
import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.education.Education;
import com.danit.fs12.entity.group.Group;
import com.danit.fs12.entity.like.Like;
import com.danit.fs12.entity.message.Message;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.entity.workplace.WorkPlace;
import com.github.javafaker.Faker;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;



import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
public class MessageRepositoryUnitTest {

    @Autowired
    private MessageRepository underTestMessage;
    @Autowired
    private UserRepository underTestUser;
    @Autowired
    private ChatRepository underTestChat;

    @BeforeEach
    public void createBeforeTest() {
        Faker faker = new Faker();

//        Post post1 = new Post(faker.book().title());
//        Post post2 = new Post(faker.book().title());
//        List<Post> posts = new ArrayList<>();
//        posts.add(post2);
//        posts.add(post1);
//
//        Comment comment1 = new Comment(faker.lorem().characters(200), post1, new User());
//        Comment comment2 = new Comment(faker.lorem().characters(100), post2, new User());
//        List<Comment> comments = new ArrayList<>();
//        comments.add(comment1);
//        comments.add(comment2);
//
//        Message message1 = new Message(faker.lorem().characters(200));
//        Message message2 = new Message(faker.lorem().characters(300));
//        List<Message> messages = new ArrayList<>();
//        messages.add(message1);
//        messages.add(message2);
//
//        Chat chat1 = new Chat();
//        Chat chat2 = new Chat();
//        List<Chat> chats = new ArrayList<>();
//        chats.add(chat1);
//        chats.add(chat2);
//
//        Group group1 = new Group();
//        Group group2 = new Group();
//        List<Group> groups = new ArrayList<>();
//        groups.add(group1);
//        groups.add(group2);
//
//        User usersFollow1 = new User();
//        User usersFollow2 = new User();
//        Set<User> usersFollows = new HashSet<>();
//        usersFollows.add(usersFollow1);
//        usersFollows.add(usersFollow2);
//
//        User usersFollowing1 = new User();
//        User usersFollowing2 = new User();
//        Set<User> usersFollowings = new HashSet<>();
//        usersFollowings.add(usersFollowing1);
//        usersFollowings.add(usersFollowing2);
//
//        WorkPlace workPlace1 = new WorkPlace();
//        WorkPlace workPlace2 = new WorkPlace();
//        List<WorkPlace> workPlaces = new ArrayList<>();
//        workPlaces.add(workPlace1);
//        workPlaces.add(workPlace2);
//
//        Like like1 = new Like();
//        Like like2 = new Like();
//        List<Like> likes = new ArrayList<>();
//        likes.add(like1);
//        likes.add(like2);
//
//        Bookmark bookmark1 = new Bookmark();
//        Bookmark bookmark2 = new Bookmark();
//        List<Bookmark> bookmarks = new ArrayList<>();
//        bookmarks.add(bookmark1);
//        bookmarks.add(bookmark2);
//
//        Education education1 = new Education();
//        Education education2 = new Education();
//        List<Education> educations = new ArrayList<>();
//        educations.add(education1);
//        educations.add(education2);
//
//        Certification certification1 = new Certification();
//        Certification certification2 = new Certification();
//        List<Certification> certifications = new ArrayList<>();
//        certifications.add(certification1);
//        certifications.add(certification2);
//
//        User user = new User(faker.name().firstName(),
//                faker.name().lastName(),
//                faker.phoneNumber().cellPhone(),
//                faker.internet().emailAddress(),
//                33,
//                "user_password",
//                "user_avatarUrl",
//                posts,
//                comments,
//                messages,
//                chats,
//                groups,
//                usersFollows,
//                usersFollowings,
//                workPlaces,
//                likes,
//                bookmarks,
//                educations,
//                certifications);
    }

    @AfterEach
    void tearDown() {
        underTestMessage.deleteAll();
    }

    @Test
    void itShouldFindMessagesByChat_Id() {
        //given
//        Chat chat1 = new Chat();
//        Chat chat2 = new Chat();
//        underTestChat.save(chat1);
//        underTestChat.save(chat2);
//
//        User user1 = new User();
//        User user2 = new User();
//        underTestUser.save(user1);
//        underTestUser.save(user2);

        Message message1 = new Message("test1");
        Message message2 = new Message("test2");
        underTestMessage.save(message1);
        underTestMessage.save(message2);

        //when
        System.out.println(underTestMessage.findMessagesByChat_Id(1L));
        //then
//        assertThat(expected).isTrue();

    }


}
