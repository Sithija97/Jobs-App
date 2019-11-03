package com.virtusa.smartwalletguide.backend.repository;

import com.virtusa.smartwalletguide.backend.entitiy.Income;
import com.virtusa.smartwalletguide.backend.entitiy.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IncomeRepository extends CrudRepository<Income,Integer> {
    List<Income> findByUser(User user);
}
