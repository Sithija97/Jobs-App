package com.virtusa.smartwalletguide.backend.entitiy;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "USER")
public class User extends SuperEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "EMAIL")
    private String email;
    @Column(name = "OCCUPATION")
    private String occupation;
    @Column(name = "PASSWORD")
    private String password;

    @OneToMany(mappedBy = "user")
    private List<Income> income = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Expense> expense = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Saving> saving = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<CashFlowReport> cashFlowReport = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Event> event = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<ExpenseLimit> expenseLimit = new ArrayList<>();


    public User() {
    }

    public User(String name, String email, String occupation, String password) {
        this.name = name;
        this.email = email;
        this.occupation = occupation;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Income> getIncome() {
        return income;
    }

    public void setIncome(List<Income> income) {
        this.income = income;
    }

    public List<Expense> getExpense() {
        return expense;
    }

    public void setExpense(List<Expense> expense) {
        this.expense = expense;
    }

    public List<Saving> getSaving() {
        return saving;
    }

    public void setSaving(List<Saving> saving) {
        this.saving = saving;
    }

    public List<CashFlowReport> getCashFlowReport() {
        return cashFlowReport;
    }

    public void setCashFlowReport(List<CashFlowReport> cashFlowReport) {
        this.cashFlowReport = cashFlowReport;
    }

    public List<Event> getEvent() {
        return event;
    }

    public void setEvent(List<Event> event) {
        this.event = event;
    }

    public List<ExpenseLimit> getExpenseLimit() {
        return expenseLimit;
    }

    public void setExpenseLimit(List<ExpenseLimit> expenseLimit) {
        this.expenseLimit = expenseLimit;
    }
}
