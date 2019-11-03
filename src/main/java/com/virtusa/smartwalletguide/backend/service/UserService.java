package com.virtusa.smartwalletguide.backend.service;

import com.virtusa.smartwalletguide.backend.dto.*;
import com.virtusa.smartwalletguide.backend.entitiy.*;
import com.virtusa.smartwalletguide.backend.entitiy.ExpenseLimit;

import java.util.List;

public interface UserService {

    User findUserByUsername(String email);

    UserDTO registerUser(UserDTO userDTO);

    UserDTO updateUser(UserDTO userDTO);



    boolean enterExpenseLimit(List<ExpenseLimitDTO> expenseLimitDTOS);

    List<ExpenseLimitDTO> getExpenseLimits(UserDTO userDTO);

    boolean enterIncomes(List<IncomeDTO> incomeDTOS);

    List<IncomeDTO> getIncomes(UserDTO userDTO);

    boolean enterExpenses(List<ExpenseDTO> expenseDTOS);

    List<ExpenseDTO> getExpenses(UserDTO userDTO);

    boolean enterSavings(List<SavingDTO> savingDTOS);

    List<SavingDTO> getSavings(UserDTO userDTO);

    boolean addSpecialEvent(EventDTO eventDTO);

    List<EventDTO> getAllSpecialEvents(UserDTO userDTO);

    List<TotalExpenseDTO> calculateAllExpensesByMonthly(UserDTO userDTO);

    List<TotalIncomeDTO> calculateAllIncomesByMonthly(UserDTO userDTO);

    List<TotalSavingDTO> calculateAllSavingsByMonthly(UserDTO userDTO);

    List<TotalExpenseForSpecialEvent> calculateAllExpenseForSpecialEventsByMonthly(UserDTO userDTO);


}
