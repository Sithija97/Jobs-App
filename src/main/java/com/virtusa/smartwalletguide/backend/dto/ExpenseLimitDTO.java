package com.virtusa.smartwalletguide.backend.dto;

import com.virtusa.smartwalletguide.backend.entitiy.User;
import com.virtusa.smartwalletguide.backend.util.enums.Expense_Category;

public class ExpenseLimitDTO extends SuperDTO{

    private int id;
    private Expense_Category expense_category;
    private double expense;
    private UserDTO userDTO;

    public ExpenseLimitDTO() {
    }

    public ExpenseLimitDTO(int id, Expense_Category expense_category, double expense) {
        this.id = id;
        this.expense_category = expense_category;
        this.expense = expense;
    }

    public ExpenseLimitDTO(int id, Expense_Category expense_category, double expense, UserDTO userDTO) {
        this.id = id;
        this.expense_category = expense_category;
        this.expense = expense;
        this.userDTO = userDTO;
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

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }
}
