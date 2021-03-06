package com.activesport.demo.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Please include a name of Event")
    private String nameOfEvent;
    @Column(updatable = false, unique = true)
    private String teamSequence;
    private String description;
    private String status;
    @NotBlank(message = "Please include a place of event")
    private String place;
    private Integer priority;
    @NotNull(message = "How many members at least?")
    private Integer minNumberOfMembers;
    @NotNull(message = "How many members maximum?")
    private Integer maxNumberOfMembers;
    @NotNull(message = "What is price of participation?")
    private Double cost;
    private String requiredEquipment;
    @NotNull(message = "When event will start?")
    @JsonFormat(pattern = "yyyy-mm-dd hh:mm:ss")
    private Date startDate;
    @NotNull(message = "When event will end?")
    @JsonFormat(pattern = "yyyy-mm-dd hh:mm:ss")
    private Date endDate;

    @Column(updatable = false)
    private String teamIdentifier;

    //ManyToOne with Eventslog
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "eventslog_id", updatable = false, nullable = false)
    @JsonIgnore
    private Eventslog eventslog;

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

    public String getNameOfEvent() {
        return nameOfEvent;
    }

    public void setNameOfEvent(String nameOfEvent) {
        this.nameOfEvent = nameOfEvent;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public Eventslog getEventslog() {
        return eventslog;
    }

    public void setEventslog(Eventslog eventslog) {
        this.eventslog = eventslog;
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
