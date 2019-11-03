package com.virtusa.smartwalletguide.backend.repository;

import com.virtusa.smartwalletguide.backend.entitiy.Event;
import com.virtusa.smartwalletguide.backend.entitiy.EventExpense;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventExpenseRepository extends CrudRepository<EventExpense,Integer> {
    List<EventExpense> findByEvent(Event event);
}
