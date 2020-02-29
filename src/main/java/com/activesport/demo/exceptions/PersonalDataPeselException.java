package com.activesport.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class PersonalDataPeselException extends RuntimeException{

    public PersonalDataPeselException(String message){
        super(message);
    }

}
