package com.activesport.demo.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class Group {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message ="Group Identifier is required")
    @Size(min=3, max=8, message = "Please use 3 to 8 characters")
    @Column(updatable = false, unique = true)
    private String GroupIdentifier;

    @NotBlank(message = "Name of Leader Group is required")
    private String nameOfLeaderGroup;

    @NotBlank(message = "Name of Group is required")
    @Size(min=3, max=50, message = "Please use 3 to 50 characters")
    private String nameOfGroup;

    @NotBlank(message = "Type of Sport is required")
    private String typeOfSport;

    private String description;

    @JsonFormat(pattern = "yyyy-mm-dd")
    private Date dateOfCreationGroup;

    public Group() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGroupIdentifier() {
        return GroupIdentifier;
    }

    public void setGroupIdentifier(String groupIdentifier) {
        GroupIdentifier = groupIdentifier;
    }

    public String getNameOfLeaderGroup() {
        return nameOfLeaderGroup;
    }

    public void setNameOfLeaderGroup(String nameOfLeaderGroup) {
        this.nameOfLeaderGroup = nameOfLeaderGroup;
    }

    public String getNameOfGroup() {
        return nameOfGroup;
    }

    public void setNameOfGroup(String nameOfGroup) {
        this.nameOfGroup = nameOfGroup;
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

    public Date getDateOfCreationGroup() {
        return dateOfCreationGroup;
    }

    public void setDateOfCreationGroup(Date dateOfCreationGroup) {
        this.dateOfCreationGroup = dateOfCreationGroup;
    }

}
