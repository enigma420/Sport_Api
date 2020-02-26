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
import java.security.Principal;

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
                                              BindingResult result, @PathVariable("eventslog_id") String eventslog_id, Principal principal){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Event event1 = eventService.addEvent(eventslog_id,event, principal.getName());

        return new ResponseEntity<Event>(event1, HttpStatus.CREATED);

    }

    @GetMapping("/{eventslog_id}")
    public Iterable<Event> getTeamEventslog(@PathVariable("eventslog_id") String eventslog_id, Principal principal){
        return eventService.findEventslogById(eventslog_id, principal.getName());
    }

    @GetMapping("/{eventslog_id}/{pt_id}")
    public ResponseEntity<?> getEvent(@PathVariable("eventslog_id") String eventslog_id, @PathVariable("pt_id") String pt_id , Principal principal){
        Event event = eventService.findPTByTeamSequence(eventslog_id,pt_id , principal.getName());
        return new ResponseEntity<Event>(event,HttpStatus.OK);
    }

    @PatchMapping("/{eventslog_id}/{pt_id}")
    public ResponseEntity<?> updateEvent(@Valid @RequestBody Event event, BindingResult result,
                                         @PathVariable("eventslog_id") String eventslog_id, @PathVariable("pt_id") String pt_id, Principal principal){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;

        Event updatedEvent = eventService.updateByEventSequence(event,eventslog_id,pt_id,principal.getName());

        return new ResponseEntity<Event>(updatedEvent,HttpStatus.OK);
    }

    @DeleteMapping("/{eventslog_id}/{pt_id}")
    public ResponseEntity<?> deleteEvent(@PathVariable("eventslog_id") String eventslog_id, @PathVariable("pt_id") String pt_id , Principal principal){
        eventService.deletePTByTeamSequence(eventslog_id,pt_id , principal.getName());

        return new ResponseEntity<String>("Event " + pt_id + " was deleted successfully", HttpStatus.OK);
    }

}
