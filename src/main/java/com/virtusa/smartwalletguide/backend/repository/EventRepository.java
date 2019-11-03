package com.virtusa.smartwalletguide.backend.repository;

import com.virtusa.smartwalletguide.backend.entitiy.Event;
import com.virtusa.smartwalletguide.backend.entitiy.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends CrudRepository<Event,Integer> {
    List<Event> findByUser(User user);

    Event findById(int id);
}
