package com.activesport.demo.repositories;

import com.activesport.demo.domain.Eventslog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventslogRepository extends CrudRepository<Eventslog, Long> {

}
