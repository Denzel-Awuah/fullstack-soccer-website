import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as config from '../../../config.js';
// import "owl-carousel/owl-carousel"

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  //Stores the team info data
  teamInfo = [] as any

  //Stores players data from db
  favPlayers = [] as any

  //Stores team roster
  teamRoster = [] as any

  //Stores final roster
  finalTeamRoster = [] as any

  //Stores the selected player Id
  playerId: number

  @Input() teamid: string;

  constructor(private router : Router, private route: ActivatedRoute) { }


  onPlayerSelection(playerId: number){
    this.router.navigate(['/player/',playerId]);
  }


  
  getData() {
    this.teamRoster = []
    this.finalTeamRoster = []
    //this.getTeamData();
    this.getTeamRoster();
  }


  async getTeamData() {
    let id = this.route.snapshot.paramMap.get('id');

    //V2 - Teams informations(id)
    //Premeir League id - 39 
    const response = await fetch("https://api-football-v1.p.rapidapi.com/v2/teams/team/" + id, config.secrets)
    const teamData = await response.json();
    console.log("Team info");
    console.log(teamData.api.teams);
    this.teamInfo = teamData.api.teams;
  }

  async getTeamRoster() {
    let id = this.route.snapshot.paramMap.get('id');

    //V3 - Players statistics by player id (teamId)
    const teamRosterResponse = await fetch("https://api-football-v1.p.rapidapi.com/v3/players?team=" + id + "&season=2020", config.secrets)
    const data = await teamRosterResponse.json();
    this.teamRoster = data.response;
    console.log("Roster info");
    console.log(this.teamRoster);
    this.checkIfStarred();
  }


  addToFavPlayers = async (player) => {
    //Creating data model before storing in db 
    var newEntry = {
      firstName: player.firstname,
      lastName: player.lastname,
      age: player.age,
      height: player.height,
      nationality: player.nationality,
      playerId: player.id,
      playerPic: player.photo
    };

    //Storing data in db 
    const postResponse = await fetch(config.postgresUrl + "/players", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    })
      .then(response => {
        alert('Successfully added to db');
        //this.leagueData = [];
        this.getFavPlayers();
        this.getData();
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }


  //While rendering players table, 
  //Check if the player is starred (in db)
  checkIfPlayerStar(starred) {

    if (starred) {
      return true;
    }
    else return false;

  }


  //Get fav players from db
  async getFavPlayers() {
    //Getting Fav Teams Data from the db 
    const response = await fetch(config.postgresUrl + "/players");
    const data = await response.json();
    console.log("Fav Players from db")
    console.log(data);
    this.favPlayers = data;
  }


  //Checks if the team is in the Fav Teams table
  checkIsFav = (entry) => {
    var res = false;
    //if the player is in the fav players table, return true 
    for (var i = 0; i < this.favPlayers.length; i++) {
      // console.log("the entry (team id)")
      // console.log(entry)
      // console.log("the db id")
      // console.log(this.favTeams[i].teamId);
      if (entry == this.favPlayers[i].playerId) {
        res = true;
        break;
      }
    }
    return res;
  }


  checkIfStarred() {
    for (var i = 0; i < this.teamRoster.length; i++) {
      var playerRowData = this.teamRoster[i];
      this.playerId = playerRowData.player.id;
      // console.log("the teams id - testing")
      // console.log(this.teamId);
      var isFav = this.checkIsFav(this.playerId);

      //If the team was found in the db
      if (isFav) {
        var newEntry = {
          ...playerRowData,
          starred: true
        }
        this.finalTeamRoster.push(newEntry);
      }
      else {
        var newEntry = {
          ...playerRowData,
          starred: false
        }
        this.finalTeamRoster.push(newEntry);
      }
    };

    console.log("the final players table data")
    console.log(this.finalTeamRoster)

  }




  async onDeletePlayerFromFavs(playerId) {

    var found = false;
    var idToDelete = playerId;
    for (var i = 0; i < this.favPlayers.length; i++) {
      console.log("the players id")
      console.log(idToDelete)
      console.log("The id in the db")
      console.log(this.favPlayers[i].playerId)
      if (idToDelete === this.favPlayers[i].playerId) {
        found = true;
        console.log("found a match")
        idToDelete = this.favPlayers[i].id;
        break;
      }
    }
    //Error checking for if the player id is not found in the db
    if (!found) {
      alert("This team is not in your Favourite Teams list")
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
    this.getData();
    this.getTeamData();
    this.getFavPlayers();
  }

}
