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
import java.security.Principal;

@RestController
@RequestMapping("/api/team")
@CrossOrigin
public class TeamController {

    /*Injection by field */

    @Autowired
    private TeamService teamService;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    /* POST endpoint which create new Team */

    @PostMapping("")
    public ResponseEntity<?> createNewTeam(@Valid @RequestBody Team team, BindingResult result, Principal principal){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if(errorMap != null) return errorMap;


        Team newTeam = teamService.saveOrUpdateTeam(team, principal.getName());
        return new ResponseEntity<Team>(team, HttpStatus.CREATED);
    }

    /* GET endpoint which get Team by team Identifier (PathVariable annotation)*/

    @GetMapping("/{teamIdentifier}")
    public ResponseEntity<?> getTeamById(@PathVariable("teamIdentifier") String teamId, Principal principal){

        Team team = teamService.findTeamByIdentifier(teamId, principal.getName());

        return new ResponseEntity<Team>(team, HttpStatus.OK);
    }

    /* GET endpoint which get all Teams */

    @GetMapping("/all")
    public Iterable<Team> getAllTeams(Principal principal){
        return teamService.findAllTeams(principal.getName());
    }

    /* GET endpoint which counts all teams */

    @GetMapping("/all/amount")
    public long getAmountOfTeams(){
        return teamService.amountOfTeams();
    }

    /* DELETE endpoint which delete Team by team Identifier (PathVariable annotation)*/

    @DeleteMapping("/{teamIdentifier}")
    public ResponseEntity<?> deleteTeam(@PathVariable("teamIdentifier") String teamId, Principal principal){

        teamService.deleteTeamByIdentifier(teamId , principal.getName());

        return new ResponseEntity<String>("Team with ID: '"+ teamId +"' was deleted", HttpStatus.OK);

    }

}
