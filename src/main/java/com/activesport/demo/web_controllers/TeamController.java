package com.activesport.demo.web_controllers;

import com.activesport.demo.domain.Team;
import com.activesport.demo.services.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/team")
public class TeamController {

    @Autowired
    private TeamService teamService;

    @PostMapping("")
    public ResponseEntity<Team> createNewTeam(@RequestBody Team team){
        Team newTeam = teamService.saveTeam(team);
        return new ResponseEntity<Team>(team, HttpStatus.CREATED);
    }


}
