package com.danit.fs12.service;

import com.danit.fs12.entity.certification.Certification;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.RepositoryInterface;
import com.danit.fs12.repository.UserRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.runner.RunWith;
import org.mockito.AdditionalAnswers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class CertificationServiceUnitTest {
    @Mock
    private UserRepository userRepository;
    @Mock
    private UserService userService;
    @Mock
    private RepositoryInterface<Certification> repo;
    @InjectMocks
    private CertificationService certificationService;

    private static final Long userId = 1L;
    private static final Long userId2 = 2L;
    private static final Long userId3 = 3L;
    private static final Long certificationId = 5L;
    private static final Long certificationId2 = 10L;
    private static final User userTest = mock(User.class);
    private static final User userTest2 = mock(User.class);
    private static final User userTest3 = mock(User.class);
    private static final Certification certificationTest = mock(Certification.class);
    private static final Certification certificationTest2 = mock(Certification.class);
    private static final Certification certificationTest3 = mock(Certification.class);

    @BeforeAll
    public static void setup() {
        userTest.setId(userId);
        userTest.setEmail("test@gmial.com");
        userTest.setFirstName("User");
        userTest.setLastName("Faker");
        certificationTest.setId(certificationId);
        certificationTest.setUser(userTest);

        userTest2.setId(userId2);
        userTest2.setEmail("test2@gmial.com");
        userTest2.setFirstName("User2");
        userTest2.setLastName("Faker2");
        certificationTest2.setId(certificationId2);
        certificationTest2.setUser(userTest2);
    }

    @Before
    public void prepare() {
        Field field = ReflectionUtils.findField(certificationService.getClass(), "repo");
        field.setAccessible(true);
        ReflectionUtils.setField(field, certificationService, repo);
    }

    @Test
    public void canCreateCertification() {
        userTest3.setId(userId3);
        userTest3.setEmail("test3@gmial.com");
        userTest3.setFirstName("User3");
        userTest3.setLastName("Faker3");

        certificationTest3.setUser(userTest3);
        Certification certificationSaved = certificationService.save(certificationTest3);
        userTest3.getCertifications().add(certificationSaved);

        when(userService.getActiveUser()).thenReturn(userTest3);
        when(userRepository.findEntityById(userTest3.getId())).thenReturn(userTest3);
        when(userRepository.save(any(User.class))).then(AdditionalAnswers.returnsFirstArg());
        when(repo.save(any(Certification.class))).then(AdditionalAnswers.returnsFirstArg());

        Assert.assertEquals(certificationTest3, certificationService.createCertification(certificationTest3));
    }

    @Test
    public void canUpdateCertification() {
        when(userService.getActiveUser()).thenReturn(userTest);
        when(userRepository.findEntityById(userTest.getId())).thenReturn(userTest);
        when(repo.save(any(Certification.class))).then(AdditionalAnswers.returnsFirstArg());

        Assertions.assertEquals(certificationTest2.getUser(), certificationService.updateCertification(certificationTest2, certificationId).getUser());
    }
}
