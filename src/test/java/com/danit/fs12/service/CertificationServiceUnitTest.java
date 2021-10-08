package com.danit.fs12.service;

import com.danit.fs12.entity.certification.Certification;
import com.danit.fs12.entity.user.User;
import com.danit.fs12.repository.CertificationRepository;
import com.danit.fs12.repository.RepositoryInterface;
import com.danit.fs12.repository.UserRepository;
import com.github.javafaker.Faker;
import org.junit.Before;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.util.ReflectionUtils;

import java.lang.reflect.Field;

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
    private static final Long certificationId = 5L;
    private static final User user1 = mock(User.class);
    private static final Certification certification1 = mock(Certification.class);

    @BeforeAll
    public static void setup() {
        Faker faker = new Faker();

        user1.setId(1L);
        user1.setEmail(faker.internet().emailAddress());
        user1.setFirstName(faker.name().firstName());
        user1.setLastName(faker.name().lastName());

        certification1.setUser(user1);
    }

    @Before
    public void prepare() {
        Field field = ReflectionUtils.findField(certificationService.getClass(), "repo");
        field.setAccessible(true);
        ReflectionUtils.setField(field, certificationService, repo);
    }

    @Test
    @Disabled
    public void canCreateCertification() {
        Certification certification = new Certification();
        certification.setUser(user1);

        when(userService.getActiveUser()).thenReturn(user1);
        when(userService.findEntityById(user1.getId())).thenReturn(user1);
        when(repo.save(certification)).thenReturn(certification);
//    when(userService.getActiveUser().getId()).thenReturn(userId);

        Assertions.assertEquals(certification, certificationService.createCertification(certification1));

    }

    @Test
    public void canUpdateCertification() {
        CertificationService certificationService = new CertificationService(userRepository, userService);
        Certification certification = new Certification();
        certification.setUser(user1);
        certification.setId(certificationId);

        when(userService.getActiveUser()).thenReturn(user1);
        when(userService.getActiveUser().getId()).thenReturn(userId);

        Assertions.assertEquals(certification, certificationService.updateCertification(certification1, certificationId));
    }
}
