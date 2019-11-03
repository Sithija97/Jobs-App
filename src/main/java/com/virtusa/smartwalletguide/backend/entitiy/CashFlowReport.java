package com.virtusa.smartwalletguide.backend.entitiy;

import javax.persistence.*;


@Entity
@Table(name = "CASH_FLOW_REPORT")
public class CashFlowReport extends SuperEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "String")
    private String date;

    @ManyToOne
    @JoinColumn(name = "fk_user")
    private User user;

    public CashFlowReport() {
    }

    public CashFlowReport(String name, String date) {
        this.name = name;
        this.date = date;
    }

    public CashFlowReport(String name, String String, User user) {
        this.name = name;
        this.date = String;
        this.user = user;
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
