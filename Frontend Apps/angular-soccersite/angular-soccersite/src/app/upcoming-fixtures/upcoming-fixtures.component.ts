import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import * as config from '../../../config.js';

@Component({
  selector: 'app-upcoming-fixtures',
  templateUrl: './upcoming-fixtures.component.html',
  styleUrls: ['./../app.component.css']
})
export class UpcomingFixturesComponent implements OnInit {


  UpcomingFixtures: Object;

  constructor(private router : Router) { }

  onTeamSelection(matchGame){
    this.router.navigate(['/team',matchGame.homeTeam.team_id]);
  }

  onTeamSelectionAway(matchGame){
    this.router.navigate(['/team',matchGame.awayTeam.team_id]);
  }


  getData(){
      //Get the Upcoming Fixtures from API
      fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/524/Regular_Season_-_3", config.secrets)
      .then(response => response.json())
      .then(data => {
        this.UpcomingFixtures = data.api.fixtures;
      })
      .catch(err => {
        console.log(err);
      });
  }

  ngOnInit(): void {
    this.getData();
  }

}
