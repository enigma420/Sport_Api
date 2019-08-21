package com.activesport.demo.repositories;

import com.activesport.demo.domain.Event;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends CrudRepository<Event, Long> {

    List<Event> findByTeamIdentifierOrderByPriority(String id);

    Event findByTeamSequence(String sequence);
}
