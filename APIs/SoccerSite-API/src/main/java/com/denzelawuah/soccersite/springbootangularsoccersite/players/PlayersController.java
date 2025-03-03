package com.denzelawuah.soccersite.springbootangularsoccersite.players;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<List<PlayersDto>> GetAllPlayers() {
        return ResponseEntity.ok(playersService.getAllPlayers());
    }

    @GetMapping("/{playerId}")
    public ResponseEntity<PlayersDto> GetPlayerById(@PathVariable long playerId)  {
        return ResponseEntity.ok(playersService.findById(playerId));
    }


    @PutMapping()
    public ResponseEntity<PlayersDto> updatePlayer(@RequestBody PlayersDto playersDto){
        return ResponseEntity.ok(playersService.updatePlayerById(playersDto));
    }

    @PostMapping
    public ResponseEntity<PlayersDto> addPlayer(@RequestBody PlayersDto thePlayerDto) {
        playersService.addPlayer(thePlayerDto);
        return new ResponseEntity<PlayersDto>(thePlayerDto, HttpStatus.CREATED);
    }


    @DeleteMapping("/{playerId}")
    public String deletePlayer(@PathVariable Long playerId) {
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
