package com.virtusa.smartwalletguide.backend.dto;

import com.virtusa.smartwalletguide.backend.entitiy.CashFlowReport;
import com.virtusa.smartwalletguide.backend.entitiy.Saving;

import java.util.ArrayList;
import java.util.List;

public class UserDTO extends SuperDTO{

    private int id;
    private String name;
    private String email;
    private String occupation;
    private String password;

    private List<ExpenseLimitDTO> expenseLimitDTOS = new ArrayList<>();
    private List<IncomeDTO> incomeDTOS = new ArrayList<>();
    private List<ExpenseDTO> expenseDTOS = new ArrayList<>();
    private List<SavingDTO> savingDTOS = new ArrayList<>();
    private List<EventDTO> eventDTOS = new ArrayList<>();
    private List<CashFlowReport> cashFlowReports = new ArrayList<>();


    public UserDTO() {
    }

    public UserDTO(int id, String name, String email, String occupation) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.occupation = occupation;
    }

    public UserDTO(String name, String email, String occupation, String password) {
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
}
