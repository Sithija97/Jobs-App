package com.virtusa.smartwalletguide.backend.dto;

import com.virtusa.smartwalletguide.backend.util.enums.Expense_Category;

import java.util.Date;

public class ExpenseDTO extends SuperDTO{

    private int id;
    private Expense_Category expense_category;
    private double expense;
    private String date;
    private UserDTO userDTO;


    public ExpenseDTO() {
    }


    public ExpenseDTO(int id, Expense_Category expense_category, double expense) {
        this.id = id;
        this.expense_category = expense_category;
        this.expense = expense;
    }

    public ExpenseDTO(int id, Expense_Category expense_category, double expense, String  date) {
        this.id = id;
        this.expense_category = expense_category;
        this.expense = expense;
        this.date = date;
    }

    public ExpenseDTO(int id, Expense_Category expense_category, double expense, String  date, UserDTO userDTO) {
        this.id = id;
        this.expense_category = expense_category;
        this.expense = expense;
        this.date = date;
        this.userDTO = userDTO;
    }

    public ExpenseDTO(Expense_Category expense_category, double expense, UserDTO userDTO) {
        this.expense_category = expense_category;
        this.expense = expense;
        this.userDTO = userDTO;
    }


    public ExpenseDTO(int id, Expense_Category expense_category, double expense, UserDTO user) {
        this.id = id;
        this.expense_category = expense_category;
        this.expense = expense;
        this.userDTO = user;
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

    public String  getDate() {
        return date;
    }

    public void setDate(String  date) {
        this.date = date;
    }
}
