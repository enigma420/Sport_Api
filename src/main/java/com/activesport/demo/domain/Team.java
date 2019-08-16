package com.activesport.demo.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Team {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String teamIdentifier;

    private String nameOfTeamLeader;

    private String nameOfTeam;

    private String typeOfSport;

    private String description;

    private Date dateOfCreationTeam;

    public Team() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeamIdentifier() {
        return teamIdentifier;
    }

    public void setTeamIdentifier(String teamIdentifier) {
        this.teamIdentifier = teamIdentifier;
    }

    public String getNameOfTeamLeader() {
        return nameOfTeamLeader;
    }

    public void setNameOfTeamLeader(String nameOfTeamLeader) {
        this.nameOfTeamLeader = nameOfTeamLeader;
    }

    public String getNameOfTeam() {
        return nameOfTeam;
    }

    public void setNameOfTeam(String nameOfTeam) {
        this.nameOfTeam = nameOfTeam;
    }

    public String getTypeOfSport() {
        return typeOfSport;
    }

    public void setTypeOfSport(String typeOfSport) {
        this.typeOfSport = typeOfSport;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDateOfCreationTeam() {
        return dateOfCreationTeam;
    }

    public void setDateOfCreationTeam(Date dateOfCreationTeam) {
        this.dateOfCreationTeam = dateOfCreationTeam;
    }
}