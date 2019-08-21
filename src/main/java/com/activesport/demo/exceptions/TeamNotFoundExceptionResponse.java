package com.activesport.demo.exceptions;

public class TeamNotFoundExceptionResponse {

    private String TeamNotFound;

    public TeamNotFoundExceptionResponse(String teamNotFound) {
        TeamNotFound = teamNotFound;
    }

    public String getTeamNotFound() {
        return TeamNotFound;
    }

    public void setTeamNotFound(String teamNotFound) {
        TeamNotFound = teamNotFound;
    }
}
