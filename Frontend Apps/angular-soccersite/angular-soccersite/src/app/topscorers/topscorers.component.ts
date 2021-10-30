import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as config from '../../../config.js';

@Component({
  selector: 'app-topscorers',
  templateUrl: './topscorers.component.html',
  styleUrls: ['./topscorers.component.css'],
  inputs: ['scorersdata']
})
export class TopscorersComponent implements OnInit {

  //Contains Top Scorers Data from API
  scorersdata: Object;


  constructor(private http: HttpClient) {

  }


  getData() {
    fetch("https://api-football-v1.p.rapidapi.com/v2/topscorers/524", config.secrets)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.scorersdata = data.api.topscorers;
      })
      .catch(err => {
        console.log(err);
      });
  }

  ngOnInit(): void {
    this.getData();

  }//end init




}//end class
