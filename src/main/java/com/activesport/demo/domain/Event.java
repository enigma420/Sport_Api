package com.activesport.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.Date;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(updatable = false)
    private String teamSequence;
    private String status;
    @NotBlank(message = "Please include a place of event")
    private String place;
    private Integer priority;
    @NotBlank(message = "How many members at least?")
    private Integer minNumberOfMembers;
    @NotBlank(message = "How many members maximum?")
    private Integer maxNumberOfMembers;
    private Double cost;
    private String requiredEquipment;
    @NotBlank(message = "When event will start?")
    private Date startDate;
    @NotBlank(message = "When event will end?")
    private Date endDate;

    @Column(updatable = false)
    private String teamIdentifier;

    //ManyToOne with Team


    public Event() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeamSequence() {
        return teamSequence;
    }

    public void setTeamSequence(String teamSequence) {
        this.teamSequence = teamSequence;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    public Integer getMinNumberOfMembers() {
        return minNumberOfMembers;
    }

    public void setMinNumberOfMembers(Integer minNumberOfMembers) {
        this.minNumberOfMembers = minNumberOfMembers;
    }

    public Integer getMaxNumberOfMembers() {
        return maxNumberOfMembers;
    }

    public void setMaxNumberOfMembers(Integer maxNumberOfMembers) {
        this.maxNumberOfMembers = maxNumberOfMembers;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public String getRequiredEquipment() {
        return requiredEquipment;
    }

    public void setRequiredEquipment(String requiredEquipment) {
        this.requiredEquipment = requiredEquipment;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getTeamIdentifier() {
        return teamIdentifier;
    }

    public void setTeamIdentifier(String teamIdentifier) {
        this.teamIdentifier = teamIdentifier;
    }

    @Override
    public String toString() {
        return "Event{" +
                "id=" + id +
                ", teamSequence='" + teamSequence + '\'' +
                ", status='" + status + '\'' +
                ", place='" + place + '\'' +
                ", priority=" + priority +
                ", minNumberOfMembers=" + minNumberOfMembers +
                ", maxNumberOfMembers=" + maxNumberOfMembers +
                ", cost=" + cost +
                ", requiredEquipment='" + requiredEquipment + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", teamIdentifier='" + teamIdentifier + '\'' +
                '}';
    }
}
