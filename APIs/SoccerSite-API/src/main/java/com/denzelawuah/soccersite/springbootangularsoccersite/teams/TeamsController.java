package com.denzelawuah.soccersite.springbootangularsoccersite.teams;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/teams")
@CrossOrigin(origins = "*")
public class TeamsController {

    private final TeamsService teamsService;

    @Autowired
    public TeamsController(TeamsService theTeamsService) {
        teamsService = theTeamsService;
    }


    @GetMapping
    public ResponseEntity<List<TeamsDto>> getAllTeams() {
        return ResponseEntity.ok(teamsService.getAllTeams());
    }


    @GetMapping("{id}")
    public ResponseEntity<TeamsDto> getTeamById(@PathVariable Long id){
        TeamsDto teamsDto = teamsService.findById(id);
        return ResponseEntity.ok(teamsDto);
    }

    @PutMapping
    public ResponseEntity<TeamsDto> updateTeam(@RequestBody TeamsDto teamsDto){
        TeamsDto updatedTeam = teamsService.updateTeam(teamsDto);
        return ResponseEntity.ok(updatedTeam);
    }


    @PostMapping
    public ResponseEntity<TeamsDto> addNewTeam(@RequestBody TeamsDto teamDto) {
        return new ResponseEntity<TeamsDto>(teamsService.addNewTeam(teamDto), HttpStatus.CREATED);
    }

    @DeleteMapping("/{teamId}")
    public String removeTeam(@PathVariable Long teamId) {
        teamsService.deleteById(teamId);
        return "Deleted employee id - " + teamId;
    }


    @GetMapping("/test")
    public String test() {
        return "TEST";
    }


    @GetMapping("/hello")
    public String hello() {
        return "HI";
    }


}
