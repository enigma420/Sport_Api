package com.activesport.demo.services;

import com.activesport.demo.domain.Team;
import com.activesport.demo.exceptions.TeamIdException;
import com.activesport.demo.repositories.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeamService {

    /*Injection by field */

    @Autowired
    private TeamRepository teamRepository;

    /* Save or Update Service Method */

    public Team saveOrUpdateTeam(Team team){
        try{
            team.setTeamIdentifier(team.getTeamIdentifier().toUpperCase());
            return teamRepository.save(team);
        }catch(Exception e){
        throw new TeamIdException("Team ID '" + team.getTeamIdentifier().toUpperCase()+"' already exists");
    }
    }

    /* find Team by Identifier Service Method which acquires method from TeamRepository  */

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

    /* find all Teams which acquires method from TeamRepository  */

    public Iterable<Team> findAllTeams(){
        if(teamRepository.count() == 0){
            throw new TeamIdException("No team exists");
        }

        return teamRepository.findAll();
    }

    /* Count Teams Method */

    public long amountOfTeams(){

        return teamRepository.count();
    }

    /* Delete Team by Identifier */

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
