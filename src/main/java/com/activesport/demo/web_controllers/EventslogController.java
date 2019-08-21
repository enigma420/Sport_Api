package com.activesport.demo.web_controllers;

import com.activesport.demo.domain.Event;
import com.activesport.demo.services.EventService;
import com.activesport.demo.services.MapValidationErrorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.persistence.GeneratedValue;
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

    @GetMapping("/{eventslog_id}")
    public Iterable<Event> getTeamEventslog(@PathVariable String eventslog_id){
        return eventService.findEventslogById(eventslog_id);
    }

    @GetMapping("/{eventslog_id}/{pt_id}")
    public ResponseEntity<?> getEvent(@PathVariable String eventslog_id, @PathVariable String pt_id){
        Event event = eventService.findPTByTeamSequence(eventslog_id,pt_id);
        return new ResponseEntity<Event>(event,HttpStatus.OK);
    }

    @PatchMapping("/{eventslog_id}/{pt_id}")
    public ResponseEntity<?> updateEvent(@Valid @RequestBody Event event, BindingResult result,
                                         @PathVariable String eventslog_id, @PathVariable String pt_id){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Event updatedEvent = eventService.updateByEventSequence(event,eventslog_id,pt_id);

        return new ResponseEntity<Event>(updatedEvent,HttpStatus.OK);
    }

}
