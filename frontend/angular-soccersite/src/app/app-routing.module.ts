import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

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



const routes: Routes = [
    
    { path: 'topscorer', component: TopscorersComponent },
    { path: 'leaguetable', component: LeagueTableComponent },
    { path: 'matches', component: PreviousFixturesComponent},
    { path: 'upcominggames', component: UpcomingFixturesComponent},
    { path: 'starred-teams', component: StarredTeamsComponent},
    { path: 'starred-players', component: StarredPlayersComponent},
    { path: 'team/:id', component: TeamInfoComponent},
    { path: 'player/:id', component: PlayerProfileComponent},
    { path: '', component: HomePageComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class appRoutingModule {}