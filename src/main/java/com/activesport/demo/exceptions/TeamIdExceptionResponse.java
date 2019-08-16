package com.activesport.demo.exceptions;

public class TeamIdExceptionResponse {

    private String projectIdentifier;

    public TeamIdExceptionResponse(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }

}

