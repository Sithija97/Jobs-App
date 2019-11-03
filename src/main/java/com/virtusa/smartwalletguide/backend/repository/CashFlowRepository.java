package com.virtusa.smartwalletguide.backend.repository;

import com.virtusa.smartwalletguide.backend.entitiy.CashFlowReport;
import com.virtusa.smartwalletguide.backend.entitiy.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CashFlowRepository extends CrudRepository<CashFlowReport,Integer> {
    List<CashFlowReport> findByUser(User user);
}
