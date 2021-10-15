package com.danit.fs12.service;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.comment.CommentRq;
import com.danit.fs12.entity.commentlike.CommentLike;
import com.danit.fs12.entity.notification.Notification;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.*;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.BeforeAll;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class CommentServiceUnitTest {
    @Mock
    private UserRepository userRepository;
    @Mock
    private PostRepository postRepository;
    @Mock
    private UserService userService;
    @Mock
    private CommentRepository commentRepository;
    @Mock
    private RepositoryInterface<Comment> repo;
    @InjectMocks
    private CommentService commentService;
    @Mock
    private NotificationService notificationService;

    private static final User userTest = mock(User.class);
    private static final Comment commentTest = mock(Comment.class);
    private static final Post postTest = mock(Post.class);
    private static final Notification notificationTest = mock(Notification.class);
    private static final CommentRq commentRqTest = mock(CommentRq.class);
    private static final Long userTestId = 1L;
    private static final Long postTestId = 5L;
    private static final Long commentId = 10L;
    private static final Long notificationId = 15L;
    private static final String postTestText = "Post1 text";
    private static final String commentTestText = "Comment1 text";
    private static final List<CommentLike> commentLikesTest = new ArrayList<>();
    private static final List<Comment> commentsListTest= new ArrayList<>();

//    @BeforeAll
//    public void setup() {
//        userTest.setId(userTestId);
//        commentTest.setId(postIdFromRq);
//        commentTest.setText(postTextFromRq);
//        commentTest.setUser(userTest);
//        commentTest.setCommentLikes(commentLikesTest);
//        notificationTest.setId(notificationId);
////        commentRqTest.setPostId(postIdFromRq);
////        commentRqTest.setText(postTextFromRq);
//        commentsListTest.add(commentTest);
//        postTest.setComments(commentsListTest);
//        postTest.setUser(userTest);
//    }

    @Before
    public void prepare() {
        Field field = ReflectionUtils.findField(commentService.getClass(), "repo");
        field.setAccessible(true);
        ReflectionUtils.setField(field, commentService, repo);
    }

    @Test
    public void canCreateComment() {
        userTest.setId(userTestId);
        userTest.setFirstName("UserTest FirstName");
        userTest.setLastName("UserTest LastName");

        commentTest.setId(commentId);

        postTest.setText(postTestText);
        postTest.setComments(commentsListTest);
        postTest.setUser(userTest);
        System.out.println(postTest.getId());

        commentRqTest.setPostId(postTestId);
        commentRqTest.setText(commentTestText);

        Long postId = commentRqTest.getPostId();
        String text = commentRqTest.getText();

        List<CommentLike> commentLikes = new ArrayList<>();

        when(userService.getActiveUser()).thenReturn(userTest);
        when(userService.getActiveUser().getId()).thenReturn(userTestId);
        when(userRepository.findEntityById(userTestId)).thenReturn(userTest);
        when(postRepository.findEntityById(postId)).thenReturn(postTest);

        postTest.getComments().add(commentTest);
        userTest.getComments().add(commentTest);

        when(repo.save(new Comment(text, postTest, userTest, commentLikes))).thenReturn(commentTest);
        when(userRepository.save(userTest)).thenReturn(userTest);
        when(postRepository.save(postTest)).thenReturn(postTest);

//        User newUser = new User();
//        newUser.setFirstName("Unit1");
//        newUser.setLastName("Test1");
//        newUser.setId(2L);
//        Post newPost = new Post();
//        newPost.setId(18L);
//        newPost.setText(postTextFromRq);
//        Long newPostId = newPost.getId();
//        newPost.setUser(newUser);
//        System.out.println(newPost.getUser());
        User postAuthor = postTest.getUser();
        Long postAuthorId = postAuthor.getId();

        doNothing().when(notificationService).createNotificationComment(postTestId, postAuthorId);
//        notificationService.createNotificationComment(postTest.getId(), postTest.getUser().getId());

        Assert.assertEquals(commentTest.getText(), commentService.createComment(commentRqTest).getText());
    }
}
