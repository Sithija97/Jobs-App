package com.virtusa.smartwalletguide.backend.util.converter;

import com.virtusa.smartwalletguide.backend.dto.*;
import com.virtusa.smartwalletguide.backend.entitiy.*;
import com.virtusa.smartwalletguide.backend.repository.EventRepository;
import com.virtusa.smartwalletguide.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component
public class EntityConverter {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;

    DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");

    private PasswordEncoder passwordEncoder;

    public EntityConverter() {
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public SuperEntity convertToEntity(SuperDTO dto){

        if(dto instanceof CashFlowReportDTO){
            CashFlowReportDTO cashFlowReportDTO = (CashFlowReportDTO) dto;
            User user = userRepository.findById(cashFlowReportDTO.getUser().getId());
            return new CashFlowReport(cashFlowReportDTO.getName(),dateFormat.format(new Date()),user);
        } else if(dto instanceof EventDTO){
            EventDTO eventDTO = (EventDTO) dto;
            User user = userRepository.findById(eventDTO.getUser().getId());
            return new Event(eventDTO.getEvent_name(),eventDTO.getReport_name(),dateFormat.format(new Date()),user);

        }else if(dto instanceof ExpenseDTO){
            ExpenseDTO expenseDTO = (ExpenseDTO) dto;
            User user = userRepository.findById(expenseDTO.getUserDTO().getId());
            return new Expense(expenseDTO.getExpense_category(),expenseDTO.getExpense(),dateFormat.format(new Date()),user);
        }else if(dto instanceof FinanceTipDTO){
            FinanceTipDTO financeTipDTO = (FinanceTipDTO) dto;
            return new FinanceTip(financeTipDTO.getNumber(),financeTipDTO.getDescription());
        }else if(dto instanceof IncomeDTO){
            IncomeDTO incomeDTO = (IncomeDTO) dto;
            User user = userRepository.findById(incomeDTO.getUser().getId());
            return new Income(incomeDTO.getIncome_category(),incomeDTO.getIncome(),dateFormat.format(new Date()),user);
        }else if(dto instanceof UserDTO){
            UserDTO userDTO = (UserDTO) dto;
            return new User(userDTO.getName(),userDTO.getEmail(),userDTO.getOccupation(),passwordEncoder.encode(userDTO.getPassword()));
        }else if(dto instanceof SavingDTO){
            SavingDTO savingDTO = (SavingDTO) dto;
            User user = userRepository.findById(savingDTO.getUser().getId());
            return new Saving(savingDTO.getSaving(),dateFormat.format(new Date()),user);
        }else if(dto instanceof ExpenseLimitDTO){
            ExpenseLimitDTO expenseLimitDTO = (ExpenseLimitDTO) dto;
            User user = userRepository.findById(expenseLimitDTO.getUserDTO().getId());
            return new ExpenseLimit(expenseLimitDTO.getExpense_category(),expenseLimitDTO.getExpense(),user);
        }

        return null;
    }
}

