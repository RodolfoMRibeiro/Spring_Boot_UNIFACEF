package com.tic.application.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tic.application.model.Card;

public interface CardRepository extends JpaRepository<Card, Long> {

}
