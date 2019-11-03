package com.virtusa.smartwalletguide.backend.dto;

public class TotalExpenseDTO {
    
    private String dateAndMonth;
    private double expense;

    public TotalExpenseDTO() {
    }

    public TotalExpenseDTO(String dateAndMonth, double expense) {
        this.dateAndMonth = dateAndMonth;
        this.expense = expense;
    }


    public String getdateAndMonth() {
        return dateAndMonth;
    }

    public void setdateAndMonth(String dateAndMonth) {
        this.dateAndMonth = dateAndMonth;
    }


    public double getExpense() {
        return expense;
    }

    public void setExpense(double expense) {
        this.expense = expense;
    }
}
