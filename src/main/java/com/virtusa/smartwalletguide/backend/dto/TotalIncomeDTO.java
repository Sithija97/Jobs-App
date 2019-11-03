package com.virtusa.smartwalletguide.backend.dto;

public class TotalIncomeDTO {
    
    private String dateAndMonth;
    private double income;

    public TotalIncomeDTO() {
    }

    public TotalIncomeDTO(String dateAndMonth,  double income) {
        this.dateAndMonth = dateAndMonth;
        this.income = income;
    }

    public String getdateAndMonth() {
        return dateAndMonth;
    }

    public void setdateAndMonth(String dateAndMonth) {
        this.dateAndMonth = dateAndMonth;
    }


    public double getIncome() {
        return income;
    }

    public void setIncome(double income) {
        this.income = income;
    }
}
