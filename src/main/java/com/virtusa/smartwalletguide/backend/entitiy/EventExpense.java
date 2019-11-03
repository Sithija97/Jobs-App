package com.virtusa.smartwalletguide.backend.entitiy;

import com.virtusa.smartwalletguide.backend.util.enums.Expense_Category;

import javax.persistence.*;

@Entity
@Table(name = "EVENT_EXPENSE")
public class EventExpense extends SuperEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;

    @Column(name = "EXPENSE_CATEGORY")
    private Expense_Category expense_category;

    @Column(name = "EXPENSE")
    private double expense;

    @ManyToOne
    @JoinColumn(name = "fk_event")
    private Event event;

    public EventExpense() {
    }

    public EventExpense(Expense_Category expense_category, double expense) {
        this.expense_category = expense_category;
        this.expense = expense;
    }

    public EventExpense(Expense_Category expense_category, double expense, Event event) {
        this.expense_category = expense_category;
        this.expense = expense;
        this.event = event;
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

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
