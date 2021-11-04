import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import * as config from '../../../config.js';

@Component({
  selector: 'app-starred-teams',
  templateUrl: './starred-teams.component.html',
  styleUrls: ['./starred-teams.component.css']
})
export class StarredTeamsComponent implements OnInit {

  //Stores api results
  teamsData: {};
  
  //Stores delete response
  deleteRespone: string;

  constructor(private router : Router) { }

  //Navigate to team profile page
  onTeamSelection(teamid){
    this.router.navigate(['/team/',teamid]);
  }

 
  //Getting data
  getData(){
   //Getting Teams Data from the db 
   fetch(config.postgresUrl+ "/teams" )
   .then(response => response.json())
   .then(data => {
     console.log(data);
     this.teamsData = data;
   })
   .catch(err => {
     console.log(err);
   });
  }


  //Handles deleting team from db
  onDeleteTeam(teamId){
    fetch(config.postgresUrl+"/teams/"+teamId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(teamId)
    })
    .then(response => {
      console.log(response);
      this.getData();
    })
  }


  ngOnInit(): void {
    this.getData();
  }

}
