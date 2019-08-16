package com.activesport.demo.services;

import com.activesport.demo.domain.Team;
import com.activesport.demo.exceptions.TeamIdException;
import com.activesport.demo.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    public Team saveTeam(Team team){
        try{
            team.setTeamIdentifier(team.getTeamIdentifier().toUpperCase());
            return teamRepository.save(team);
        }catch(Exception e){
            throw new TeamIdException("Team ID '" + team.getTeamIdentifier().toUpperCase()+"' already exists");
        }
    }
}
