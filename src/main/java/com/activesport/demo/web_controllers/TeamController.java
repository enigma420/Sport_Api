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

    /*Injection by field */

    @Autowired
    private TeamService teamService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    /* POST endpoint which create new Team */

    @PostMapping("")
    public ResponseEntity<?> createNewTeam(@Valid @RequestBody Team team, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;


        Team newTeam = teamService.saveOrUpdateTeam(team);
        return new ResponseEntity<Team>(team, HttpStatus.CREATED);
    }

    /* GET endpoint which get Team by team Identifier (PathVariable annotation)*/

    @GetMapping("/{teamIdentifier}")
    public ResponseEntity<?> getTeamById(@PathVariable String teamIdentifier){

        Team team = teamService.findTeamByIdentifier(teamIdentifier);

        return new ResponseEntity<Team>(team, HttpStatus.OK);
    }

    /* GET endpoint which get all Teams */

    @GetMapping("/all")
    public ResponseEntity<?> getAllTeams(){
        Iterable<Team> allTeams = teamService.findAllTeams();
        return new ResponseEntity<>(T<allTeams, 0>, HttpStatus.OK);
    }

    /* GET endpoint which counts all teams */

    @GetMapping("/all/amount")
    public long getAmountOfTeams(){
        return teamService.amountOfTeams();
    }

    /* DELETE endpoint which delete Team by team Identifier (PathVariable annotation)*/

    @DeleteMapping("/{teamIdentifier}")
    public ResponseEntity<?> deleteTeam(@PathVariable String teamIdentifier){

        teamService.deleteTeamByIdentifier(teamIdentifier);

        return new ResponseEntity<String>("Team with ID: '"+teamIdentifier+"' was deleted", HttpStatus.OK);

    }

}
