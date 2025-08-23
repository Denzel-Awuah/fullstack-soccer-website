package com.denzelawuah.soccersite.springbootangularsoccersite.teams;

import java.util.List;
import java.util.stream.Collectors;

import com.denzelawuah.soccersite.springbootangularsoccersite.Exception.TeamsException;
import com.denzelawuah.soccersite.springbootangularsoccersite.players.Players;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class TeamsServiceImp implements TeamsService{

	private TeamsMapper teamsMapper;
	private final TeamsRepository teamsRepository;
	
	@Autowired	
	public TeamsServiceImp(TeamsRepository theTeamsRepository, TeamsMapper theTeamsMapper) {
		 teamsRepository = theTeamsRepository;
		 teamsMapper = theTeamsMapper;
	}
	
	
	public List<TeamsDto> getAllTeams(){
		return teamsRepository.findAll().stream()
				.map(teamsMapper::MapToTeamsDto)
				.collect(Collectors.toList());
	}


	public TeamsDto addNewTeam(TeamsDto teamDto) {
		teamsRepository.save(teamsMapper.MapToTeam(teamDto));
		return teamDto;
	}


	public TeamsDto updateTeam(TeamsDto teamsDto) {
		TeamsDto existingTeam = findById(teamsDto.getId());
		existingTeam.setTeamName(teamsDto.getTeamName());
		existingTeam.setPhotoLink(teamsDto.getPhotoLink());
		existingTeam.setTeamId(teamsDto.getTeamId());
		teamsRepository.save(teamsMapper.MapToTeam(existingTeam));
		return existingTeam;
	}


	public TeamsDto findById(Long teamId) {
		Teams teams = teamsRepository.findById(teamId).orElseThrow(() -> new TeamsException("Could not find Team with id" + teamId));
		return teamsMapper.MapToTeamsDto(teams);
	}


	public void deleteById(Long teamId) {
		TeamsDto teamsDto = findById(teamId);
		teamsRepository.deleteById(teamId);
	}
	 
	
	
}
