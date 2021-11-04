import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as config from '../../../config.js';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  playerInfo: [];

  constructor(private route: ActivatedRoute) { }

  
  async getData(){
    let id = this.route.snapshot.paramMap.get('id');

    //V3 - Players information(id)
    const response = await fetch("https://api-football-v1.p.rapidapi.com/v3/players?id=" + id+"&season=2020", config.secrets)
    const playerData = await response.json();
    this.playerInfo = playerData.response;
    console.log("Player info");
    console.log(this.playerInfo);
  }

  ngOnInit(): void {
    this.getData();
  }

}
