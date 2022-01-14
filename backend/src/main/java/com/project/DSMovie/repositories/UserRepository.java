package com.project.DSMovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.DSMovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
}
