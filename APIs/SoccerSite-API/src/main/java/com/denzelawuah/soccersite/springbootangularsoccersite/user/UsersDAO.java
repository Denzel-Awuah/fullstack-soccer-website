package com.denzelawuah.soccersite.springbootangularsoccersite.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsersDAO extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);
}
