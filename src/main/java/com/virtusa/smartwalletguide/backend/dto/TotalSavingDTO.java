package com.virtusa.smartwalletguide.backend.dto;

public class TotalSavingDTO {
    
    private String dateAndMonth;
    private double saving;

    public TotalSavingDTO() {
    }

    public TotalSavingDTO(String dateAndMonth, double saving) {
        this.dateAndMonth = dateAndMonth;
        this.saving = saving;
    }


    public String getdateAndMonth() {
        return dateAndMonth;
    }

    public void setdateAndMonth(String dateAndMonth) {
        this.dateAndMonth = dateAndMonth;
    }

    public double getSaving() {
        return saving;
    }

    public void setSaving(double saving) {
        this.saving = saving;
    }
}
