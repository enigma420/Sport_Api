package com.activesport.demo.services;

import com.activesport.demo.domain.Team;
import com.activesport.demo.exceptions.TeamIdException;
import com.activesport.demo.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;

    public Team saveTeam(Team team){

        try {
            team.setTeamIdentifier(team.getTeamIdentifier().toUpperCase());
            return teamRepository.save(team);
        }catch(Exception e){
        throw new TeamIdException("Team ID '" + team.getTeamIdentifier().toUpperCase()+"' already exists");
    }
    }

    public Team findTeamByIdentifier(String teamId){

        Team team = teamRepository.findByTeamIdentifier(teamId.toUpperCase());

        if(teamRepository.count() == 0){
            throw new TeamIdException("No team exists");
        }
        else if(team == null){
            throw new TeamIdException("Project ID '" + teamId + "' does not exist");
        }
    return team;
    }

    public Iterable<Team> findAllTeams(){
        if(teamRepository.count() == 0){
            throw new TeamIdException("No team exists");
        }

        return teamRepository.findAll();
    }

    public void deleteTeamByIdentifier(String teamId){

        Team team = teamRepository.findByTeamIdentifier(teamId.toUpperCase());

        if(teamRepository.count() == 0){
            throw new TeamIdException("You cannot delete because no team exists");
        }
        if(team == null){
            throw new TeamIdException("Cannot Delete Team with ID: '"+teamId+"' This team does not exist");
        }

        teamRepository.delete(team);
    }

}
