package com.virtusa.smartwalletguide.backend.entitiy;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "EVENT")
public class Event extends SuperEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    @Column(name = "EVENT_NAME")
    private String event_name;
    @Column(name = "REPORT_NAME")
    private String report_name;
    @Column(name = "DATE")
    private String date;

    @ManyToOne
    @JoinColumn(name = "fk_user")
    private User user;

    @OneToMany(mappedBy = "event")
    private List<EventExpense> eventExpense = new ArrayList<>();

    public Event() {
    }

    public Event(String event_name, String report_name) {
        this.event_name = event_name;
        this.report_name = report_name;
    }

    public Event(String event_name, String report_name, User user) {
        this.event_name = event_name;
        this.report_name = report_name;
        this.user = user;
    }

    public Event(String event_name, String report_name, String date) {
        this.event_name = event_name;
        this.report_name = report_name;
        this.date = date;
    }

    public Event(String event_name, String report_name, String date, User user) {
        this.event_name = event_name;
        this.report_name = report_name;
        this.date = date;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }

    public String getReport_name() {
        return report_name;
    }

    public void setReport_name(String report_name) {
        this.report_name = report_name;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<EventExpense> getEventExpense() {
        return eventExpense;
    }

    public void setEventExpense(List<EventExpense> eventExpense) {
        this.eventExpense = eventExpense;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
