package com.virtusa.smartwalletguide.backend.entitiy;

import com.virtusa.smartwalletguide.backend.util.enums.Expense_Category;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "EXPENSE")
public class Expense extends SuperEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    @Column(name = "EXPENSE_CATEGORY")
    private Expense_Category expense_category;
    @Column(name = "EXPENSE")
    private double expense;

    @Column(name = "DATE")
    private String date;

    @ManyToOne
    @JoinColumn(name = "fk_user")
    private User user;


    public Expense() {
    }

    public Expense(Expense_Category expense_category, double expense, String date, User user) {
        this.expense_category = expense_category;
        this.expense = expense;
        this.date = date;
        this.user = user;
    }

    public Expense(Expense_Category expense_category, double expense, User user) {
        this.expense_category = expense_category;
        this.expense = expense;
        this.user = user;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
