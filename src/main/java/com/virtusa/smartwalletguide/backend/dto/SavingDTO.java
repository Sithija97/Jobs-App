package com.virtusa.smartwalletguide.backend.dto;

import java.util.Date;

public class SavingDTO extends SuperDTO{

    private int id;
    private double saving;
    private String date;
    private UserDTO userDTO;

    public SavingDTO() {
    }

    public SavingDTO(int id, double saving, String date) {
        this.id = id;
        this.saving = saving;
        this.date = date;
    }

    public SavingDTO(int id, double saving, String date, UserDTO userDTO) {
        this.id = id;
        this.saving = saving;
        this.date = date;
        this.userDTO = userDTO;
    }

    public SavingDTO(double saving) {
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
