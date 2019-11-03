package com.virtusa.smartwalletguide.backend.dto;

public class CashFlowReportDTO extends SuperDTO{

    private int id;
    private String name;
    private String date;
    private UserDTO userDTO;

    public CashFlowReportDTO() {
    }

    public CashFlowReportDTO(String name, String date) {
        this.name = name;
        this.date = date;
    }

    public CashFlowReportDTO(int id, String name, String date) {
        this.id = id;
        this.name = name;
        this.date = date;
    }

    public CashFlowReportDTO(int id, String name, String date, UserDTO user) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.userDTO = user;
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

    public String  getDate() {
        return date;
    }

    public void setDate(String  date) {
        this.date = date;
    }

    public UserDTO getUser() {
        return userDTO;
    }

    public void setUser(UserDTO user) {
        this.userDTO = user;
    }
}
