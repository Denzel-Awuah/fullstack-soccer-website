import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as config from "./../../../config.js"


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private httpClient: HttpClient) { }

  getAllPlayers(): Observable<any> {
    return this.httpClient.get<any>(config.postgresUrl+"/players");
  }

  addNewPlayer(data):Observable<any>{
    return this.httpClient.post<any>(config.postgresUrl+"/players", {
      body: data
    });
   }

   deletePlayer(data):Observable<any>{
    return this.httpClient.delete<any>(config.postgresUrl+"/players/"+data);
   }
 
}
