package com.virtusa.smartwalletguide.backend.dto;

import com.virtusa.smartwalletguide.backend.util.enums.Income_Category;

import javax.persistence.*;
import java.util.Date;


public class IncomeDTO extends SuperDTO{

    private int id;
    private Income_Category income_category;
    private double income;
    private String date;
    private UserDTO userDTO;


    public IncomeDTO(Income_Category income_category, double income) {
        this.income_category = income_category;
        this.income = income;
    }

    public IncomeDTO(int id, Income_Category income_category, double income, String  date) {
        this.id = id;
        this.income_category = income_category;
        this.income = income;
        this.date = date;
    }

    public IncomeDTO(int id, Income_Category income_category, double income, String date, UserDTO userDTO) {
        this.id = id;
        this.income_category = income_category;
        this.income = income;
        this.date = date;
        this.userDTO = userDTO;
    }

    public IncomeDTO(int id, Income_Category income_category, double income) {
        this.id = id;
        this.income_category = income_category;
        this.income = income;
    }

    public IncomeDTO(int id, Income_Category income_category, double income, UserDTO user) {
        this.id = id;
        this.income_category = income_category;
        this.income = income;
        this.userDTO = user;
    }

    public IncomeDTO() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Income_Category getIncome_category() {
        return income_category;
    }

    public void setIncome_category(Income_Category income_category) {
        this.income_category = income_category;
    }

    public double getIncome() {
        return income;
    }

    public void setIncome(double income) {
        this.income = income;
    }

    public UserDTO getUser() {
        return userDTO;
    }

    public void setUser(UserDTO user) {
        this.userDTO = user;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public UserDTO getUserDTO() {
        return userDTO;
    }

    public void setUserDTO(UserDTO userDTO) {
        this.userDTO = userDTO;
    }
}
