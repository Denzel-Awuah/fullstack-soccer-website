package com.denzelawuah.soccersite.springbootangularsoccersite.teams;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TeamsService {

	private final TeamsRepository teamsRepository;
	
	@Autowired	
	public TeamsService(TeamsRepository theTeamsRepository) {
		 teamsRepository = theTeamsRepository;
	}
	
	
	public List<Teams> getAllTeams(){
		return teamsRepository.findAll();
	}


	public void addNewTeam(Teams team) {
		teamsRepository.save(team);
	}


	public Teams findById(Long teamId) {
		return teamsRepository.getById(teamId);
	}


	public void deleteById(Long teamId) {
		teamsRepository.deleteById(teamId);
	}
	 
	
	
}
