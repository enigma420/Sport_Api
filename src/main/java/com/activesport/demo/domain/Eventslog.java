package com.activesport.demo.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Eventslog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Integer PTSequence = 0;
    private String teamIdentifier;

    //OneToOne with team
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "team_id",nullable = false)
    @JsonIgnore
    private Team team;

    //OneToMany Event
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "eventslog")
    private List<Event> events = new ArrayList<>();

    public Eventslog() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPTSequence() {
        return PTSequence;
    }

    public void setPTSequence(Integer PTSequence) {
        this.PTSequence = PTSequence;
    }

    public String getTeamIdentifier() {
        return teamIdentifier;
    }

    public void setTeamIdentifier(String teamIdentifier) {
        this.teamIdentifier = teamIdentifier;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }
}
