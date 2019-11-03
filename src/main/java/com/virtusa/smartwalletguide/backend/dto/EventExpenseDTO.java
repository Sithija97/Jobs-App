package com.virtusa.smartwalletguide.backend.dto;

import com.virtusa.smartwalletguide.backend.util.enums.Expense_Category;


public class EventExpenseDTO extends SuperDTO{

    private int id;
    private Expense_Category expense_category;
    private double expense;
    private EventDTO eventDTO;

    public EventExpenseDTO() {
    }

    public EventExpenseDTO(Expense_Category expense_category, double expense) {
        this.expense_category = expense_category;
        this.expense = expense;
    }

    public EventExpenseDTO(int id, Expense_Category expense_category, double expense) {
        this.id = id;
        this.expense_category = expense_category;
        this.expense = expense;
    }

    public EventExpenseDTO(int id, Expense_Category expense_category, double expense, EventDTO eventDTO) {
        this.id = id;
        this.expense_category = expense_category;
        this.expense = expense;
        this.eventDTO = eventDTO;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Expense_Category getExpense_category() {
        return expense_category;
    }

    public void setExpense_category(Expense_Category expense_category) {
        this.expense_category = expense_category;
    }

    public double getExpense() {
        return expense;
    }

    public void setExpense(double expense) {
        this.expense = expense;
    }

    public EventDTO getEventDTO() {
        return eventDTO;
    }

    public void setEventDTO(EventDTO eventDTO) {
        this.eventDTO = eventDTO;
    }
}
