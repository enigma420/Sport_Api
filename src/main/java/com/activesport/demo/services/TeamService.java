package com.activesport.demo.services;

import com.activesport.demo.domain.Team;
import com.activesport.demo.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    public Team saveTeam(Team team){

        //Logic


        return teamRepository.save(team);
    }

}
