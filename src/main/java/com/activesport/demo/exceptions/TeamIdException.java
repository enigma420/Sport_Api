package com.activesport.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class TeamIdException extends RuntimeException {

    public TeamIdException(String message) {
        super(message);
    }
}
