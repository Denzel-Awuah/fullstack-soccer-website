import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app-routing.module'; //routing module

import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { TopscorersComponent } from './topscorers/topscorers.component';
import { PreviousFixturesComponent } from './previous-fixtures/previous-fixtures.component';
import { UpcomingFixturesComponent } from './upcoming-fixtures/upcoming-fixtures.component';
import { LeagueTableComponent } from './league-table/league-table.component';
import { StarredTeamsComponent } from './starred-teams/starred-teams.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { StarredPlayersComponent } from './starred-players/starred-players.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { TeamsService } from './service/teams-service.service';
import { PlayersService } from './service/players-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TopscorersComponent,
    PreviousFixturesComponent,
    UpcomingFixturesComponent,
    LeagueTableComponent,
    StarredTeamsComponent,
    HomePageComponent,
    TeamInfoComponent,
    StarredPlayersComponent,
    PlayerProfileComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, appRoutingModule
  ],
  providers: [TeamsService, PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
