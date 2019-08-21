package com.activesport.demo.services;

import com.activesport.demo.domain.Event;
import com.activesport.demo.domain.Eventslog;
import com.activesport.demo.repositories.EventRepository;
import com.activesport.demo.repositories.EventslogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    @Autowired
    private EventslogRepository eventslogRepository;

    @Autowired
    private EventRepository eventRepository;


    public Event addEvent(String teamIdentifier, Event event){

        Eventslog eventslog = eventslogRepository.findByTeamIdentifier(teamIdentifier);

        event.setEventslog(eventslog);

        Integer eventslogSequence = eventslog.getPTSequence();

        eventslogSequence++;

        event.setTeamSequence(eventslog.getTeamIdentifier()+"-"+eventslogSequence);
        event.setTeamIdentifier(teamIdentifier);

        if(event.getStatus() == "" || event.getStatus() == null){
            event.setStatus("IN_FUTURE");
        }

        if(event.getPriority() == null){
            event.setPriority(5);
        }

        return eventRepository.save(event);
    }

    public Iterable<Event> findEventslogById(String id){
        return eventRepository.findByTeamIdentifierOrderByPriority(id);
    }


}
