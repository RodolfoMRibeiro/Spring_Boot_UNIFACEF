package com.tic.application.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tic.application.model.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
