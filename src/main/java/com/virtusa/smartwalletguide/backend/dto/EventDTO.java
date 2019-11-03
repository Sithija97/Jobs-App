package com.virtusa.smartwalletguide.backend.dto;

import java.util.ArrayList;
import java.util.List;

public class EventDTO extends SuperDTO{

    private int id;
    private String event_name;
    private String report_name;
    private String date;
    private List<EventExpenseDTO> eventExpenseDTOS = new ArrayList<>();
    private UserDTO userDTO;

    public EventDTO() {
    }

    public EventDTO(int id, String event_name, String report_name) {
        this.id = id;
        this.event_name = event_name;
        this.report_name = report_name;
    }

    public EventDTO(String event_name, String report_name) {
        this.event_name = event_name;
        this.report_name = report_name;
    }

    public EventDTO(int id, String event_name, String report_name, String date) {
        this.id = id;
        this.event_name = event_name;
        this.report_name = report_name;
        this.date = date;
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

    public List<EventExpenseDTO> getEventExpenseDTOS() {
        return eventExpenseDTOS;
    }

    public void setEventExpenseDTOS(List<EventExpenseDTO> eventExpenseDTOS) {
        this.eventExpenseDTOS = eventExpenseDTOS;
    }
}
