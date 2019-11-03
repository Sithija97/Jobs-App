package com.virtusa.smartwalletguide.backend.entitiy;

import javax.persistence.*;

@Entity
@Table(name = "FINANCE_TIP")
public class FinanceTip extends SuperEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    @Column(name = "NUMBER")
    private int number;
    @Column(name = "DESCRIPTION")
    private String description;

    public FinanceTip() {
    }

    public FinanceTip(int number, String description) {
        this.number = number;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
