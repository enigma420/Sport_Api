package com.activesport.demo.services;

import com.activesport.demo.domain.Event;
import com.activesport.demo.domain.Eventslog;
import com.activesport.demo.domain.Team;
import com.activesport.demo.exceptions.TeamNotFoundException;
import com.activesport.demo.repositories.EventRepository;
import com.activesport.demo.repositories.EventslogRepository;
import com.activesport.demo.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    @Autowired
    private EventslogRepository eventslogRepository;

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private TeamRepository teamRepository;


    public Event addEvent(String teamIdentifier, Event event){
    try {
        Eventslog eventslog = eventslogRepository.findByTeamIdentifier(teamIdentifier);

        event.setEventslog(eventslog);

        Integer eventslogSequence = eventslog.getPTSequence();

        eventslogSequence++;

        eventslog.setPTSequence(eventslogSequence);

        event.setTeamSequence(eventslog.getTeamIdentifier() + "-" + eventslogSequence);
        event.setTeamIdentifier(teamIdentifier);

        if (event.getStatus() == "" || event.getStatus() == null) {
            event.setStatus("IN_FUTURE");
        }

        if (event.getPriority() == null) {
            event.setPriority(5);
        }
    }catch(Exception e){
        throw new TeamNotFoundException("Team not found");
    }
        return eventRepository.save(event);
    }

    public Iterable<Event> findEventslogById(String id){

        Team team = teamRepository.findByTeamIdentifier(id);

        if(team == null){
            throw new TeamNotFoundException("Team with ID: '" + id + "' does not exist");
        }

        return eventRepository.findByTeamIdentifierOrderByPriority(id);
    }


}
