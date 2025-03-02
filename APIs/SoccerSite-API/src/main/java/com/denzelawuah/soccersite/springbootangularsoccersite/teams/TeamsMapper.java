package com.denzelawuah.soccersite.springbootangularsoccersite.teams;

import org.springframework.stereotype.Component;

@Component
public class TeamsMapper {

    public TeamsDto MapToTeamsDto(Teams teams){
        return new TeamsDto(
                teams.getId(),
                teams.getTeamName(),
                teams.getPhotoLink(),
                teams.getTeamId()
        );
    }

    public Teams MapToTeam(TeamsDto teamsDto){
        return new Teams(
                teamsDto.getId(),
                teamsDto.getTeamName(),
                teamsDto.getPhotoLink(),
                teamsDto.getTeamId()
        );
    }

}
