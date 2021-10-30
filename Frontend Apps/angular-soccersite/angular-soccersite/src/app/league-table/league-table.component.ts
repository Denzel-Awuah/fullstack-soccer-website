import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as config from '../../../config.js';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./../app.component.css']
})
export class LeagueTableComponent implements OnInit {

  //Stores the league table data
  leagueData = [] as any

  //Stores data from the API
  data = [] as any

  //Stores fav teams from db
  favTeams = [] as any

  //Stores the current teamId
  teamId: string


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  onTeamSelection(theteam) {
    this.router.navigate(['/team', theteam.team_id]);
  }

  refreshComponent() {
    console.log("refreshing component")
  }



  async getData() {
    this.data = []
    this.leagueData = []
    //Get the League Table Data from API
    const response = await fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/524", config.secrets)
    const data = await response.json();
    this.data = data.api.standings[0];

    this.getFavTeams();
    this.checkIfStarred();
  }


  async getFavTeams() {
   
    //Getting Fav Teams Data from the db 
    const response = await fetch(config.postgresUrl + "/teams");
    const data = await response.json();
    console.log("Fav teams from db")
    console.log(data);
    this.favTeams = data;
  }




  //Checks if the team is in the Fav Teams table
  checkIsFav = (entry) => {
    var res = false;
    //if the team is in the fav teams table, return true 
    for (var i = 0; i < this.favTeams.length; i++) {
      // console.log("the entry (team id)")
      // console.log(entry)
      // console.log("the db id")
      // console.log(this.favTeams[i].teamId);
      if (entry == this.favTeams[i].teamId) {
        res = true;
        break;
      }
    }
    return res;
  }

  checkIfStarred = () => {
    for (var i = 0; i < this.data.length; i++) {
      var tableRowData = this.data[i];
      this.teamId = tableRowData.team_id.toString();
      // console.log("the teams id - testing")
      // console.log(this.teamId);
      var isFav = this.checkIsFav(this.teamId);

      //If the team was found in the db
      if (isFav) {
        var newEntry = {
          ...tableRowData,
          starred: true
        }
        this.leagueData.push(newEntry);
      }
      else {
        var newEntry = {
          ...tableRowData,
          starred: false
        }
        this.leagueData.push(newEntry);
      }
    };

    console.log("the final leage data")
    console.log(this.leagueData)

  }

  addToFavTeams = async (team) => {
    //Creating data model before storing in db 
    var newEntry = {
      teamName: team.teamName,
      photoLink: team.logo,
      teamId: team.team_id
    };

    //Storing data in db 
    const postResponse = await fetch(config.postgresUrl + "/teams", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    })
      .then(response => {
        alert('Successfully added to db');
        //this.leagueData = [];
        this.getFavTeams();
        this.getData();
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }


  checkTeamStar(starred) {

    if (starred) {
      return true;
    }
    else return false;

  }


 async onDeleteTeamFromFavs(teamId) {

    var found = false;
    var idToDelete = teamId.toString();
    for (var i = 0; i < this.favTeams.length; i++) {
      console.log("the teams id")
      console.log(idToDelete)
      console.log("The id in the db")
      console.log(this.favTeams[i].teamId)
      if (idToDelete === this.favTeams[i].teamId) {
        found = true;
        console.log("found a match")
        idToDelete = this.favTeams[i].id;
        break;
      }
    }
    if (!found) {
      alert("This team is not in your Favourite Teams list")
      return;
    }


    const deleteResponse = await fetch(config.postgresUrl + "/teams/" + idToDelete, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(idToDelete)
    });


        this.getFavTeams();
        this.getData();
      
  }


  ngOnInit(): void {
    this.getFavTeams();
    this.getData();
  }//emd init

}//end class
