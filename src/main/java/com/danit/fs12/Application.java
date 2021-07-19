package com.danit.fs12;

import com.danit.fs12.entity.Post;
import com.danit.fs12.entity.User;
import com.danit.fs12.repository.CommentRepository;
import com.danit.fs12.repository.PostRepository;
import com.danit.fs12.repository.UserRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @Bean
  CommandLineRunner commandLineRunner(
      UserRepository userRepository,
      PostRepository postRepository,
      CommentRepository commentRepository
  ) {
    return args -> {
      generateRandomUsers(userRepository);

      userRepository
          .findById(2L)
          .ifPresentOrElse(System.out::println,
              () -> {
                System.out.println("User was not found");
              });

      userRepository
          .findById(211L)
          .ifPresentOrElse(System.out::println,
              () -> {
                System.out.println("User was not found");
              });
      // will not be found in this case

      List<User> users = userRepository.findAll();
      users.forEach(System.out::println);


      User firstUser = userRepository.findById(1L).get();
      System.out.println(firstUser);

      Post postNo1 = new Post("Elon Musk goes to Mars", "This is a really breaking news!");
      Post postNo2 = new Post("Tesla's capitalization skyrocketed", "Unexpected turn...");
      firstUser.addPost(postNo1);
      firstUser.addPost(postNo2);
      userRepository.save(firstUser);

      System.out.println("Let's try to print out user with post after replacing toString method");
      System.out.println(firstUser);
      System.out.println(firstUser.getPosts());

//    Connection connection = new Connection(firstUser, 4L);
//    userRepository.findById(1L).ifPresent(user -> user.addConnection(4L));
//-----------------------------------------
//    COMMENTS
      Post post1 = postRepository.findById(1L).get();
      User user1 = userRepository.findById(1L).get();
      System.out.println("---------------");
      System.out.println(post1);
      System.out.println(user1);

//      Here we get an error:
//      Caused by: org.springframework.dao.InvalidDataAccessApiUsageException:
//      detached entity passed to persist: com.danit.fs12.entity.Post;

//      Comment comment1FromRepo = commentRepository.save(
//          new Comment("This post is meaningful indeed", post1, user1));
//      post1.addComment(comment1FromRepo);
//      postRepository.save(post1);


      System.out.println("OUR APPLICATION HAS STARTED !!!");

    };
  }

  private void generateRandomUsers(UserRepository userRepository) {
    Faker faker = new Faker();
    for (int i = 0; i < 10; i++) {
      String firstName = faker.name().firstName();
      String lastName = faker.name().lastName();
      String email = String.format("%s.%s@dan-it.edu", firstName, lastName);
      User user = new User(
          firstName,
          lastName,
          email,
          "+380503332211",
          30,
          "userLogin",
          "userPassHash");

      userRepository.save(user);
    }

  }


}
