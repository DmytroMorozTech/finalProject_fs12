package com.danit.fs12;

import com.danit.fs12.entity.User;
import com.danit.fs12.repository.UserRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

  public static void main(String[] args) {
    SpringApplication.run(Application.class, args);
  }

  @Bean
  CommandLineRunner commandLineRunner(
      UserRepository userRepository
  ) {
    return args -> {
      generateRandomUsers(userRepository);
//      User firstUser = userRepository.getOne(1L);
//      System.out.println(firstUser);
//      userRepository.deleteById(1L); // this works; so the problem is not with JPA repo

//      System.out.println(firstUser);
//      Post postNo1 = new Post("Elon Musk goes to Mars", "This is a really breaking news!");
//      firstUser.addPost(postNo1);

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
