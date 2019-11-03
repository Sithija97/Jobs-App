package com.virtusa.smartwalletguide.backend.entitiy;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "SAVING")
public class Saving  extends SuperEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private int id;
    @Column(name = "SAVING")
    private double saving;

    @Column(name = "DATE")
    private String date;

    @ManyToOne
    @JoinColumn(name = "fk_user")
    private User user;

    public Saving() {
    }

    public Saving(double saving, User user) {
        this.saving = saving;
        this.user = user;
    }

    public Saving(double saving, String date, User user) {
        this.saving = saving;
        this.date = date;
        this.user = user;
    }

    public Saving(double saving) {
        this.saving = saving;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public double getSaving() {
        return saving;
    }

    public void setSaving(double saving) {
        this.saving = saving;
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
