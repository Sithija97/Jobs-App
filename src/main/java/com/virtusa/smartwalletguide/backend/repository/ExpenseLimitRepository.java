package com.virtusa.smartwalletguide.backend.repository;

import com.virtusa.smartwalletguide.backend.entitiy.ExpenseLimit;
import com.virtusa.smartwalletguide.backend.entitiy.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExpenseLimitRepository extends CrudRepository<ExpenseLimit,Integer> {

    List<ExpenseLimit> findByUser(User user);

}
