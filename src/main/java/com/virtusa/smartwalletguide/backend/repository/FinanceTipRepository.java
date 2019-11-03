package com.virtusa.smartwalletguide.backend.repository;

import com.virtusa.smartwalletguide.backend.entitiy.FinanceTip;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FinanceTipRepository extends CrudRepository<FinanceTip,Integer> {
    FinanceTip findByNumber(int number);
}
