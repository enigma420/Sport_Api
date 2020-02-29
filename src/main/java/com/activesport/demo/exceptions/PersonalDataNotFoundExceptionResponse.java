package com.activesport.demo.exceptions;

public class PersonalDataNotFoundExceptionResponse {

    private String PersonalDataNotFound;

    public PersonalDataNotFoundExceptionResponse(String personalDataNotFound){
        personalDataNotFound = personalDataNotFound;
    }

    public String getPersonalDataNotFound() {
        return PersonalDataNotFound;
    }

    public void setPersonalDataNotFound(String personalDataNotFound) {
        PersonalDataNotFound = personalDataNotFound;
    }
}
