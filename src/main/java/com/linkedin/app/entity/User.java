package com.linkedin.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User extends AbstractEntity {

    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private String cell;
    private Integer age;
    private String login;
    private String password;

}
