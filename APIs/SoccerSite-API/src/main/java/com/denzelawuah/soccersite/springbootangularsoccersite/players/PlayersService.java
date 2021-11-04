package com.denzelawuah.soccersite.springbootangularsoccersite.players;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class PlayersService {

	private final PlayersRepository playersRepository;
	
	@Autowired
	public PlayersService(PlayersRepository thePlayersRepository) {
		playersRepository = thePlayersRepository;
	}
	
	public List<Players> getAllPlayers(){
		return playersRepository.findAll();
	}

	public void addPlayer(Players player) {
		playersRepository.save(player);
	}

	public Players findById(Long playerId) {
		return playersRepository.getById(playerId);
	}
	
	public void deleteById(Long playerId) {
		 playersRepository.deleteById(playerId);
	}

}
