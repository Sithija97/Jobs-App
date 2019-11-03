package com.virtusa.smartwalletguide.backend.util.converter;


import com.virtusa.smartwalletguide.backend.dto.*;
import com.virtusa.smartwalletguide.backend.entitiy.*;
import org.springframework.stereotype.Component;

@Component
public class DtoConverter {

    public SuperDTO convertTODto(SuperEntity entity){
        if(entity instanceof CashFlowReport){
            CashFlowReport cashFlowReport = (CashFlowReport) entity;
            return new CashFlowReportDTO(cashFlowReport.getId(),cashFlowReport.getName(),cashFlowReport.getDate());
        } else if(entity instanceof Event){
            Event event = (Event) entity;
            return new EventDTO(event.getId(),event.getEvent_name(),event.getReport_name(),event.getDate());
        }else if(entity instanceof EventExpense){
            EventExpense eventExpense = (EventExpense) entity;
            return new EventExpenseDTO(eventExpense.getId(),eventExpense.getExpense_category(),eventExpense.getExpense());
        }else if(entity instanceof Expense){
            Expense expense = (Expense) entity;
            return new ExpenseDTO(expense.getId(),expense.getExpense_category(),expense.getExpense(),expense.getDate());
        }else if(entity instanceof FinanceTip){
            FinanceTip financeTip = (FinanceTip) entity;
            return new FinanceTipDTO(financeTip.getId(),financeTip.getNumber(),financeTip.getDescription());
        }else if(entity instanceof Income){
            Income income = (Income) entity;
            return new IncomeDTO(income.getId(),income.getIncome_category(),income.getIncome(),income.getDate());
        }else if(entity instanceof User){
            User user = (User) entity;
            return new UserDTO(user.getId(),user.getName(),user.getEmail(),user.getOccupation());
        }else if(entity instanceof Saving){
            Saving saving = (Saving) entity;
            return new SavingDTO(saving.getId(),saving.getSaving(),saving.getDate());
        }else if(entity instanceof ExpenseLimit){
            ExpenseLimit expenseLimit = (ExpenseLimit) entity;
            return new ExpenseLimitDTO(expenseLimit.getId(),expenseLimit.getExpense_category(),expenseLimit.getExpense());
        }


        return null;
    }
}
