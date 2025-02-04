package com.denzelawuah.soccersite.springbootangularsoccersite.players;

import org.springframework.stereotype.Component;

@Component
public class PlayersMapper {

    public PlayersDto MaptoDto(Players player){
        return new PlayersDto(
                player.getId(),
                player.getFirstName(),
                player.getLastName(),
                player.getAge(),
                player.getHeight(),
                player.getNationality(),
                player.getPlayerPic(),
                player.getPlayerId()
        );
    }

    public Players MapToPlayer(PlayersDto playersDto){
        return new Players(
                playersDto.getId(),
                playersDto.getFirstName(),
                playersDto.getLastName(),
                playersDto.getAge(),
                playersDto.getHeight(),
                playersDto.getNationality(),
                playersDto.getPlayerPic(),
                playersDto.getPlayerId()
        );
    }
}
