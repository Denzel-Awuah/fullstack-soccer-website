import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import * as config from '../../../config.js';
import { PlayersService } from '../service/players-service.service.js';

@Component({
  selector: 'app-starred-players',
  templateUrl: './starred-players.component.html',
  styleUrls: ['./starred-players.component.css']
})
export class StarredPlayersComponent implements OnInit {

  constructor(private router : Router,
              private playersService: PlayersService) { }

  //Stores players data in db
  playersData =  [] as any


  onPlayerSelection(playerId: number){
    this.router.navigate(['/player/',playerId]);
  }





  //Function for btn 
  //Gets data from the db
  getData(){
    //Getting Teams Data from the db 
    fetch(config.postgresUrl+ "/players" )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.playersData = data;
    })
    .catch(err => {
      console.log(err);
    });
   }


   //Get fav players from db
   async getFavPlayers() {
    //Getting Fav Teams Data from the db 
    const response = await fetch(config.postgresUrl + "/players");
    const data = await response.json();
    console.log("Fav Players from db")
    console.log(data);
    this.playersData = data;


  }




  async onDeletePlayer(playerId) {

    var found = false;
    var idToDelete = playerId;
    for (var i = 0; i < this.playersData.length; i++) {
      console.log("the players id")
      console.log(idToDelete)
      console.log("The id in the db")
      console.log(this.playersData[i].id)
      if (idToDelete === this.playersData[i].id) {
        found = true;
        console.log("found a match")
        idToDelete = this.playersData[i].id;
        break;
      }
    }
    //Error checking for if the player id is not found in the db
    if (!found) {
      alert("This player is not in your Favourite Players list")
      return;
    }


    const deleteResponse = await fetch(config.postgresUrl + "/players/" + idToDelete, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(idToDelete)
    });
    //const responseData = await deleteResponse.json();

    console.log(config.postgresUrl + "/players/" + idToDelete);
    //console.log(responseData);

    console.log("Successfully removed player")

    this.getFavPlayers();
    this.getData();

  }



  ngOnInit(): void {
    //Get fav players from db 
    this.getFavPlayers();
  }

}
