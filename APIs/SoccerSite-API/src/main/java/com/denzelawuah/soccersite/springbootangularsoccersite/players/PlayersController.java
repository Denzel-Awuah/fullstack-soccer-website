package com.denzelawuah.soccersite.springbootangularsoccersite.players;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/players")
@CrossOrigin(origins = "*")
public class PlayersController {

    private final PlayersService playersService;

    @Autowired
    public PlayersController(PlayersService thePlayersService) {
        playersService = thePlayersService;
    }

    @GetMapping
    public ResponseEntity<List<Players>> GetAllPlayers() {
        return ResponseEntity.ok(playersService.getAllPlayers());
    }

    @GetMapping("/{playerId}")
    public ResponseEntity<Players> GetPlayerById(@PathVariable long playerId)  {
        return ResponseEntity.ok(playersService.findById(playerId));
    }


    @PostMapping
    public void addPlayer(@RequestBody Players thePlayer) {
        playersService.addPlayer(thePlayer);
    }


    @DeleteMapping("/{playerId}")
    public String deletePlayer(@PathVariable Long playerId) {

        //Get the player from the db by id
        Players tempPlayer = playersService.findById(playerId);

        // throw exception if null
        if (tempPlayer == null) {
            throw new RuntimeException("Player id not found - " + playerId);
        }

        playersService.deleteById(playerId);

        return "Deleted Player id - " + playerId;
    }


    @GetMapping("/test")
    public String test() {
        return "TEST";
    }


    @GetMapping("/hello")
    public String hello() {
        return "HI";
    }

}
