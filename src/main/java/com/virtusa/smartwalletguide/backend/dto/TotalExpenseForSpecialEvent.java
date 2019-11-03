package com.virtusa.smartwalletguide.backend.dto;

public class TotalExpenseForSpecialEvent {

    private String dateAndMonth;
    private double totalExpense;


    public TotalExpenseForSpecialEvent() {
    }

    public TotalExpenseForSpecialEvent(String dateAndMonth, double totalExpense) {
        this.dateAndMonth = dateAndMonth;
        this.totalExpense = totalExpense;
    }

    public String getDateAndMonth() {
        return dateAndMonth;
    }

    public void setDateAndMonth(String dateAndMonth) {
        this.dateAndMonth = dateAndMonth;
    }

    public double gettotalExpense() {
        return totalExpense;
    }

    public void settotalExpense(double totalExpense) {
        this.totalExpense = totalExpense;
    }
}
