package com.shv.Ecommerce.repository;

import com.shv.Ecommerce.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
     Optional<User> findByEmail(String email);
}
