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
}


 
