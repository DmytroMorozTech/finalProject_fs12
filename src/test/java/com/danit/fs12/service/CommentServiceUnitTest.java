package com.danit.fs12.service;

import com.danit.fs12.entity.comment.Comment;
import com.danit.fs12.entity.comment.CommentRq;
import com.danit.fs12.entity.commentlike.CommentLike;
import com.danit.fs12.entity.post.Post;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.CommentRepository;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.RepositoryInterface;
import com.danit.fs12.repository.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.Silent.class)
public class CommentServiceUnitTest {
    @Mock
    private UserRepository userRepository;
    @Mock
    private PostRepository postRepository;
    @Mock
    private UserService userService;
    @Mock
    private RepositoryInterface<Comment> repo;
    @InjectMocks
    private CommentService commentService;
    @Mock
    private NotificationService notificationService;

    private static final User userTest = new User();
    private static final Comment commentTest = new Comment();
    private static final Post postTest = new Post();
    private static final CommentRq commentRqTest = new CommentRq();
    private static final CommentLike commentLikeTest = new CommentLike();
    private static final Long userTestId = 1L;
    private static final Long postTestId = 5L;
    private static final Long commentId = 10L;
    private static final Long commentLikeTestId = 15L;
    private static final String postTestText = "Post1 text";
    private static final String commentTestText = "Comment1 text";
    private static final List<CommentLike> commentLikesTest = new ArrayList<>();
    private static final List<Comment> commentsListTest = new ArrayList<>();

    @Before
    public void setup () {
        userTest.setId(userTestId);
        userTest.setFirstName("UserTest FirstName");
        userTest.setLastName("UserTest LastName");

        commentTest.setId(commentId);
        commentTest.setUser(userTest);

        postTest.setId(postTestId);
        postTest.setText(postTestText);
        postTest.setComments(commentsListTest);
        postTest.setUser(userTest);

        commentRqTest.setPostId(postTestId);
        commentRqTest.setText(commentTestText);

        commentsListTest.add(commentTest);

        commentLikeTest.setId(commentLikeTestId);
        commentLikeTest.setUser(userTest);

        commentLikesTest.add(commentLikeTest);
        commentLikeTest.setComment(commentTest);
        commentLikeTest.setUser(userTest);

        commentTest.setCommentLikes(commentLikesTest);
        commentTest.setPost(postTest);
        commentTest.setText(commentTestText);
    }

    @Before
    public void prepare() {
        Field field = ReflectionUtils.findField(commentService.getClass(), "repo");
        field.setAccessible(true);
        ReflectionUtils.setField(field, commentService, repo);
    }

    @Test
    public void canCreateComment() {
        Long postId = commentRqTest.getPostId();
        String text = commentRqTest.getText();

        when(userService.getActiveUser()).thenReturn(userTest);
        when(userRepository.findEntityById(userTestId)).thenReturn(userTest);
        when(postRepository.findEntityById(postId)).thenReturn(postTest);

        postTest.getComments().add(commentTest);
        userTest.getComments().add(commentTest);

        when(repo.save(new Comment(text, postTest, userTest, commentLikesTest))).thenReturn(commentTest);
        when(userRepository.save(userTest)).thenReturn(userTest);
        when(postRepository.save(postTest)).thenReturn(postTest);

        User postAuthor = postTest.getUser();
        Long postAuthorId = postAuthor.getId();

        doNothing().when(notificationService).createNotificationComment(postTestId, postAuthorId);

        Assert.assertEquals(commentTest.getText(), commentService.createComment(commentRqTest).getText());
    }

    @Test
    public void canToggleCommentLike() {
        when(userService.getActiveUser()).thenReturn(userTest);
        when(repo.findEntityById(commentId)).thenReturn(commentTest);
        when(userRepository.findEntityById(userTestId)).thenReturn(userTest);
        when(repo.save(commentTest)).thenReturn(commentTest);

        Assert.assertEquals(commentTestText, commentService.toggleCommentLike(commentId).getText());
    }
}
