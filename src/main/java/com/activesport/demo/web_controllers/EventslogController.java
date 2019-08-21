package com.activesport.demo.web_controllers;

import com.activesport.demo.domain.Event;
import com.activesport.demo.services.EventService;
import com.activesport.demo.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/eventslog")
@CrossOrigin
public class EventslogController {

    @Autowired
    private EventService eventService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/{eventslog_id}")
    public ResponseEntity<?> addPTtoEventslog(@Valid @RequestBody Event event,
                                              BindingResult result, @PathVariable String eventslog_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Event event1 = eventService.addEvent(eventslog_id,event);

        return new ResponseEntity<Event>(event1, HttpStatus.CREATED);

    }


}
