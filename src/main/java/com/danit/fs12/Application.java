package com.danit.fs12;

import com.danit.fs12.entity.Comment;
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

//-----------------------------------------
//    COMMENTS
      generateComments(userRepository, postRepository, commentRepository);


//      Here we get an error:
//      Caused by: org.springframework.dao.InvalidDataAccessApiUsageException:
//      detached entity passed to persist: com.danit.fs12.entity.Post;

//      Comment comment1FromRepo = commentRepository.save(
//          new Comment("This post is meaningful indeed", post1, user1));
//      post1.addComment(comment1FromRepo);
//      postRepository.save(post1);


      System.out.println("OUR APPLICATION HAS STARTED !!!");

//      User user2 = userRepository.findById(2L).get();
//      System.out.println(user2.getClass().getSimpleName());

//      Map<String,String> conversionMapping = Map.ofEntries(
//          Map.entry("key1", "value1"),
//          Map.entry("key2", "value2"),
//          Map.entry("key3", "value3")
//      );
//      System.out.println(conversionMapping);


    };
  }

  private void generateRandomUsers(UserRepository userRepository) {
    Faker faker = new Faker();
    for (int i = 0; i < 10; i++) {
      String firstName = faker.name().firstName();
      String lastName = faker.name().lastName();
      String email = String.format("%s.%s@dan-it.edu", firstName, lastName);
      User user = User.builder()
          .firstName(firstName)
          .lastName(lastName)
          .email(email)
          .cell("+380503332211")
          .age(30)
          .login("userLogin")
          .password("userPassHash")
          .build();

      userRepository.save(user);
    }
  }

  private void generateComments(
      UserRepository userRepository,
      PostRepository postRepository,
      CommentRepository commentRepository) {
    Comment comment1 = new Comment("Comment No.1 Comment No.1 Comment No.1");
    Comment comment2 = new Comment("Comment No.2 Comment No.2 Comment No.2");
    Comment comment3 = new Comment("Comment No.3 Comment No.3 Comment No.3");

    User user1 = userRepository.findById(1L).get();
    Post post1 = postRepository.findById(1L).get();

//    post1.addComment(comment1);
//    user1.addComment(comment1);
//
//    post1.addComment(comment2);
//    user1.addComment(comment2);
//
//    post1.addComment(comment3);
//    user1.addComment(comment3);

  }


}
