package com.linkedin.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity(name = "Users")
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "users")
public class User extends AbstractEntity {

    @Column(name = "id")
    private long id;

    @Column(name = "u_first_name")
    private String firstName;

    @Column(name = "u_last_name")
    private String lastName;

    @Column(name = "u_email")
    private String email;

    @Column(name = "u_cell")
    private String cell;

    @Column(name = "u_age")
    private Integer age;

    @Column(name = "u_login")
    private String login;

    @Column(name = "u_password")
    private String password;

}
