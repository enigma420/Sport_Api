package com.activesport.demo.repositories;

import com.activesport.demo.domain.Team;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamIdentifier(String teamId);

    @Override
    Iterable<Team> findAll();
}
