package com.activesport.demo.services;

import com.activesport.demo.domain.Event;
import com.activesport.demo.domain.Eventslog;
import com.activesport.demo.domain.Team;
import com.activesport.demo.domain.User;
import com.activesport.demo.exceptions.TeamIdException;
import com.activesport.demo.exceptions.TeamNotFoundException;
import com.activesport.demo.repositories.EventRepository;
import com.activesport.demo.repositories.EventslogRepository;
import com.activesport.demo.repositories.TeamRepository;
import com.activesport.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import java.util.List;

@Service
public class TeamService {

    /*Injection by field */

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private EventslogRepository EventslogRepository;

    @Autowired
    private UserRepository userRepository;

    /* Save or Update Service Method */

    public Team saveOrUpdateTeam(Team team, String username){

        if(team.getId() != null){
            Team existingTeam = teamRepository.findByTeamIdentifier(team.getTeamIdentifier());
            if(existingTeam != null &&(!existingTeam.getTeamLeader().equals(username))){
                throw new TeamNotFoundException("Team not found in your account");
            }else if(existingTeam == null){
                throw new TeamNotFoundException("Team with ID: '" + team.getTeamIdentifier() + "' cannot be updated");
            }
        }

        try{
            User user = userRepository.findByUsername(username);
            team.setUser(user);
            team.setTeamLeader(user.getUsername());
            team.setTeamIdentifier(team.getTeamIdentifier().toUpperCase());

            if(team.getId() == null){
                Eventslog eventslog = new Eventslog();
                team.setEventslog(eventslog);
                eventslog.setTeam(team);
                eventslog.setTeamIdentifier(team.getTeamIdentifier().toUpperCase());
            }

            if(team.getId() != null){
                team.setEventslog(EventslogRepository.findByTeamIdentifier(team.getTeamIdentifier().toUpperCase()));
            }

            return teamRepository.save(team);
        }catch(Exception e){
            throw new TeamIdException("Team ID '" + team.getTeamIdentifier().toUpperCase()+"' already exists");
        }
    }

    /* find Team by Identifier Service Method which acquires method from TeamRepository  */

    public Team findTeamByIdentifier(String teamId, String username){

        Team team = teamRepository.findByTeamIdentifier(teamId.toUpperCase());

        if(teamRepository.count() == 0){
            throw new TeamIdException("No team exists");
        }
        else if(team == null){
            throw new TeamIdException("Project ID '" + teamId + "' does not exist");
        }

        if(!team.getTeamLeader().equals(username)){
            throw new TeamNotFoundException("Team not found in your account");
        }
    return team;
    }

    /* find all Teams which acquires method from TeamRepository  */

    public  Iterable<Team> findAllTeams(String username){
        if(teamRepository.count() == 0){
            throw new TeamIdException("No team exists");
        }
        return teamRepository.findAllByTeamLeader(username);
    }

    /* Count Teams Method */

    public long amountOfTeams(){

        return teamRepository.count();
    }

    /* Delete Team by Identifier */

    public void deleteTeamByIdentifier(String teamId, String username){

        Team team = teamRepository.findByTeamIdentifier(teamId.toUpperCase());

        if(teamRepository.count() == 0){
            throw new TeamIdException("You cannot delete because no team exists");
        }
        if(team == null){
            throw new TeamIdException("Cannot Delete Team with ID: '"+teamId+"' This team does not exist");
        }

        teamRepository.delete(findTeamByIdentifier(teamId , username));
    }

}
