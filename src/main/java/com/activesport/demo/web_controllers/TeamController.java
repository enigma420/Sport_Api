package com.activesport.demo.web_controllers;

import com.activesport.demo.domain.Team;
import com.activesport.demo.services.MapValidationErrorService;
import com.activesport.demo.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("")
    public ResponseEntity<?> createNewTeam(@Valid @RequestBody Team team, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;


        Team newTeam = teamService.saveTeam(team);
        return new ResponseEntity<Team>(team, HttpStatus.CREATED);
    }

    @GetMapping("/{teamId}")
    public ResponseEntity<?> getTeamById(@PathVariable String teamId){

        Team team = teamService.findTeamByIdentifier(teamId);

        return new ResponseEntity<Team>(team, HttpStatus.OK);
    }

    @GetMapping("/all")
    public Iterable<Team> getAllTeams(){
        return teamService.findAllTeams();
    }

    @DeleteMapping("/{teamId}")
    public ResponseEntity<?> deleteTeam(@PathVariable String teamId){

        teamService.deleteTeamByIdentifier(teamId);

        return new ResponseEntity<String>("Team with ID: '"+teamId+"' was deleted", HttpStatus.OK);

    }

}
