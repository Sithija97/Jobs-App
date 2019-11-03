package com.virtusa.smartwalletguide.backend.repository;

import com.virtusa.smartwalletguide.backend.entitiy.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Integer> {
    User findById(int id);
    User findByEmail(String email);


}
