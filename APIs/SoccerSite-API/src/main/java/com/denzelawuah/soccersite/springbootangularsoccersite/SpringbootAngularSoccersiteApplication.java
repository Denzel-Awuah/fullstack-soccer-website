package com.denzelawuah.soccersite.springbootangularsoccersite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.denzelawuah.soccersite.springbootangularsoccersite.players.Players;
import com.denzelawuah.soccersite.springbootangularsoccersite.players.PlayersRepository;

@SpringBootApplication
public class SpringbootAngularSoccersiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootAngularSoccersiteApplication.class, args);
	}
	
	@Autowired
	private PlayersRepository repository; 
	
	@Bean
	public void addPlayers() {
		Players player1 = new Players("Denzel", "Awuah", 23, "5'8", "Ghana", 
				"https://media.api-sports.io/football/players/1458.png", 1458L);
		Players player2 = new Players("Sly", "Awuah", 23, "5'8", "Ghana", 
				"https://media.api-sports.io/football/players/1458.png", 1458L);
		Players player3 = new Players("Frank", "Awuah", 23, "5'8", "Ghana", 
				"https://media.api-sports.io/football/players/1458.png", 1458L);
		
		repository.save(player1);
		repository.save(player2);
		repository.save(player3);
	}
	

}


 