package com.virtusa.smartwalletguide.backend.service.impl;

import com.virtusa.smartwalletguide.backend.dto.*;
import com.virtusa.smartwalletguide.backend.entitiy.*;
import com.virtusa.smartwalletguide.backend.entitiy.ExpenseLimit;
import com.virtusa.smartwalletguide.backend.repository.*;
import com.virtusa.smartwalletguide.backend.service.UserService;
import com.virtusa.smartwalletguide.backend.util.converter.DtoConverter;
import com.virtusa.smartwalletguide.backend.util.converter.EntityConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private EventExpenseRepository eventExpenseRepository;

    @Autowired
    private IncomeRepository incomeRepository;

    @Autowired
    private ExpenseRepository expenseRepository;

    @Autowired
    private SavingRepository savingRepository;

    @Autowired
    private ExpenseLimitRepository expenseLimitRepository;

    @Autowired
    private FinanceTipRepository financeTipRepository;

    @Autowired
    private EntityConverter entityConverter;

    @Autowired
    private DtoConverter dtoConverter;

    @Override
    public User findUserByUsername(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public UserDTO registerUser(UserDTO userDTO) {
        User user = (User) entityConverter.convertToEntity(userDTO);
        return (UserDTO) dtoConverter.convertTODto(userRepository.save(user));
    }


    @Override
    public UserDTO updateUser(UserDTO userDTO) {
        User user = (User) entityConverter.convertToEntity(userDTO);
        user.setId(userDTO.getId());
        return (UserDTO) dtoConverter.convertTODto(userRepository.save(user));
    }

    @Override
    public boolean enterExpenseLimit(List<ExpenseLimitDTO> expenseLimitDTOS) {
        boolean status = true;
        for(ExpenseLimitDTO expenseLimitDTO : expenseLimitDTOS){
             status = expenseLimitRepository.save((ExpenseLimit) entityConverter.convertToEntity(expenseLimitDTO)) != null ? true : false;
        }
        return status;
    }

    @Override
    public List<ExpenseLimitDTO> getExpenseLimits(UserDTO userDTO) {
        List<ExpenseLimitDTO> expenseLimitDTOS = new ArrayList<>();
        for(ExpenseLimit expenseLimit : expenseLimitRepository.findAll()){
            expenseLimitDTOS.add((ExpenseLimitDTO) dtoConverter.convertTODto(expenseLimit));
        }
         return expenseLimitDTOS;
    }

    @Override
    public boolean enterIncomes(List<IncomeDTO> incomeDTOS) {
        boolean status = true;
        for(IncomeDTO incomeDTO : incomeDTOS){
            status = incomeRepository.save((Income) entityConverter.convertToEntity(incomeDTO)) != null ? true : false;
        }
        return status;
    }

    @Override
    public List<IncomeDTO> getIncomes(UserDTO userDTO) {
        List<IncomeDTO> incomeDTOS = new ArrayList<>();
        for(Income income : incomeRepository.findAll()){
            incomeDTOS.add((IncomeDTO) dtoConverter.convertTODto(income));
        }
        return incomeDTOS;
    }


    @Override
    public boolean enterExpenses(List<ExpenseDTO> expenseDTOS) {
        boolean status = true;
        for(ExpenseDTO expenseDTO : expenseDTOS){
            status = expenseRepository.save((Expense) entityConverter.convertToEntity(expenseDTO)) != null ? true : false;
        }
        return status;
    }

    @Override
    public List<ExpenseDTO> getExpenses(UserDTO userDTO) {
        List<ExpenseDTO> expenseDTOS = new ArrayList<>();
        for(Expense expense : expenseRepository.findAll()){
            expenseDTOS.add((ExpenseDTO) dtoConverter.convertTODto(expense));
        }
        return expenseDTOS;
    }

    @Override
    public boolean enterSavings(List<SavingDTO> savingDTOS) {
        boolean status = true;
        for(SavingDTO savingDTO : savingDTOS){
            status = savingRepository.save((Saving) entityConverter.convertToEntity(savingDTO)) != null ? true : false;
        }
        return status;
    }

    @Override
    public List<SavingDTO> getSavings(UserDTO userDTO) {
        List<SavingDTO> savingDTOS = new ArrayList<>();
        for(Saving saving : savingRepository.findAll()){
            savingDTOS.add((SavingDTO) dtoConverter.convertTODto(saving));
        }
        return savingDTOS;
    }


    @Override
    public boolean addSpecialEvent(EventDTO eventDTO) {

        List<EventExpenseDTO> eventExpenseDTOS = eventDTO.getEventExpenseDTOS();

        boolean status =  eventRepository.save((Event) entityConverter.convertToEntity(eventDTO)) != null ? true : false;
        Event event = eventRepository.findById(eventDTO.getId());

        if(!status)
            return false;


        for(EventExpenseDTO eventExpenseDTO : eventExpenseDTOS){
            EventExpense eventExpense = (EventExpense)  entityConverter.convertToEntity(eventExpenseDTO);
            eventExpense.setEvent(event);
            status = eventExpenseRepository.save(eventExpense) != null ? true : false;
        }

        return status;
    }

    @Override
    public List<EventDTO> getAllSpecialEvents(UserDTO userDTO) {
        List<EventDTO> eventDTOS = new ArrayList<>();
        for(Event event : eventRepository.findAll()){
            eventDTOS.add((EventDTO) dtoConverter.convertTODto(event));
        }
        return eventDTOS;
    }

    @Override
    public List<TotalExpenseDTO> calculateAllExpensesByMonthly(UserDTO userDTO) {
       return null;
    }

    @Override
    public List<TotalIncomeDTO> calculateAllIncomesByMonthly(UserDTO userDTO) {
        return null;
    }

    @Override
    public List<TotalSavingDTO> calculateAllSavingsByMonthly(UserDTO userDTO) {
        return null;
    }

    @Override
    public List<TotalExpenseForSpecialEvent> calculateAllExpenseForSpecialEventsByMonthly(UserDTO userDTO) {
        return null;
    }
}
