package com.activesport.demo.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Team {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message ="Team Identifier is required")
    @Size(min=3, max=15, message = "Please use 3 to 15 characters")
    @Column(updatable = false)
    private String teamIdentifier;
    @NotBlank(message = "Project description is required")
    private String nameOfTeamLeader;
    @NotBlank(message = "Project description is required")
    private String nameOfTeam;
    @NotBlank(message = "Project description is required")
    private String typeOfSport;
    @Size(max=250, message = "Use max 250 characters")
    private String description;
    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date dateOfCreationTeam;

    //OneToMany with Event

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