package com.denzelawuah.soccersite.springbootangularsoccersite.players;

import java.util.List;
import java.util.stream.Collectors;

import com.denzelawuah.soccersite.springbootangularsoccersite.Exception.PlayerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PlayersServiceImp implements PlayersService{

	private PlayersMapper playersMapper;
	private final PlayersRepository playersRepository;
	
	@Autowired
	public PlayersServiceImp(PlayersRepository thePlayersRepository, PlayersMapper thePlayersMapper) {
		playersRepository = thePlayersRepository;
		playersMapper = thePlayersMapper;
	}
	
	public List<PlayersDto> getAllPlayers(){
		return playersRepository.findAll().stream()
				.map(playersMapper::MaptoDto)
				.collect(Collectors.toList());
	}

	public PlayersDto addPlayer(PlayersDto playerDto) {
		Players player = playersMapper.MapToPlayer(playerDto);
		playersRepository.save(player);
		return playersMapper.MaptoDto(player);
	}


	public PlayersDto findById(Long playerId) {
		Players player = playersRepository.findById(playerId).orElseThrow(() -> new PlayerException("Player not found with id "+ playerId));
		return playersMapper.MaptoDto(player);
	}


	public PlayersDto updatePlayerById(PlayersDto playersDto) {
		PlayersDto existingPlayer = findById(playersDto.getId());
		existingPlayer.setFirstName(playersDto.getFirstName());
		existingPlayer.setLastName(playersDto.getLastName());
		existingPlayer.setAge(playersDto.getAge());
		existingPlayer.setHeight(playersDto.getHeight());
		existingPlayer.setNationality(playersDto.getNationality());
		existingPlayer.setPlayerPic(playersDto.getPlayerPic());
		existingPlayer.setPlayerId(playersDto.getPlayerId());
		playersRepository.save(playersMapper.MapToPlayer(existingPlayer));
		return existingPlayer;
	}

	public void deleteById(Long playerId) {
		PlayersDto playerDto = findById(playerId);
		playersRepository.deleteById(playerId);
	}

}
