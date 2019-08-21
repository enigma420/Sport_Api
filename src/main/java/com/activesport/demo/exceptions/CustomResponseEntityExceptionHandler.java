package com.activesport.demo.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

@ExceptionHandler
    public final ResponseEntity<Object> handleTeamIdException(TeamIdException ex, WebRequest req){
    TeamIdExceptionResponse exceptionResponse = new TeamIdExceptionResponse(ex.getMessage());
    return new ResponseEntity(exceptionResponse, HttpStatus.FORBIDDEN);
}

@ExceptionHandler
    public final ResponseEntity<Object> handleTeamNotFoundException(TeamNotFoundException ex, WebRequest req){
    TeamNotFoundExceptionResponse exceptionResponse = new TeamNotFoundExceptionResponse(ex.getMessage());
    return new ResponseEntity(exceptionResponse,HttpStatus.BAD_REQUEST);
}

}
