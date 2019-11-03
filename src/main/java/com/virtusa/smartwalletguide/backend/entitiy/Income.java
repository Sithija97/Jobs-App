package com.virtusa.smartwalletguide.backend.entitiy;

import com.virtusa.smartwalletguide.backend.util.enums.Income_Category;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "INCOME")
public class Income extends SuperEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    @Column(name = "INCOME_CATEGORY")
    private Income_Category income_category;
    @Column(name = "INCOME")
    private double income;

    @Column(name = "DATE")
    private String date;

    @ManyToOne
    @JoinColumn(name = "fk_user")
    private User user;

    public Income(Income_Category income_category, double income, String date, User user) {
        this.income_category = income_category;
        this.income = income;
        this.date = date;
        this.user = user;
    }

    public Income(Income_Category income_category, double income) {
        this.income_category = income_category;
        this.income = income;
    }



    public Income(Income_Category income_category, double income, User user) {
        this.income_category = income_category;
        this.income = income;
        this.user = user;
    }

    public Income() {
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
