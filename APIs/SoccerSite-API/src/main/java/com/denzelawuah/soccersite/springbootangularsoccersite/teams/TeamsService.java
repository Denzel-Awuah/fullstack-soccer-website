package com.denzelawuah.soccersite.springbootangularsoccersite.teams;

import java.util.List;

public interface TeamsService {

    List<TeamsDto> getAllTeams();

    TeamsDto addNewTeam(TeamsDto teamDto);

    TeamsDto updateTeam(TeamsDto teamsDto);

    TeamsDto findById(Long id);

    void deleteById(Long id);

}
