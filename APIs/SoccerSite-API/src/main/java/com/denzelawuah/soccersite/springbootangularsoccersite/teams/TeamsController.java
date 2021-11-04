package com.denzelawuah.soccersite.springbootangularsoccersite.teams;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.bytebuddy.dynamic.loading.PackageDefinitionStrategy.Definition.Undefined;


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
	public List<Teams> getAllTeams() {
		return teamsService.getAllTeams();
	}
	
	@PostMapping
	public void addNewTeam(@RequestBody Teams team) {
		

		teamsService.addNewTeam(team);
	}
	
	@DeleteMapping("/{teamId}")
	public String removeTeam(@PathVariable Long teamId) {
		

		Teams tempTeam = teamsService.findById(teamId);
		
		// throw exception if null
		
		if (tempTeam == null) {
			throw new RuntimeException("Employee id not found - " + teamId);
		}
		
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
