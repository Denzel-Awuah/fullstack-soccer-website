package com.denzelawuah.soccersite.springbootangularsoccersite.players;

import java.util.List;

public interface PlayersService {

    List<PlayersDto> getAllPlayers();

    PlayersDto addPlayer(PlayersDto playerDto);

    PlayersDto findById(Long playerId);

    PlayersDto updatePlayerById(PlayersDto playersDto);

    void deleteById(Long playerId);

}
