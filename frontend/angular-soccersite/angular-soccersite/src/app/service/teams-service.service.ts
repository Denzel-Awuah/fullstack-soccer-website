import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as config from "./../../../config.js"

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private httpClient: HttpClient) { }

 getAllTeams(): Observable<any> {
   return this.httpClient.get<any>(config.postgresUrl+"/teams");
 }

 addNewTeam(data):Observable<any>{
  return this.httpClient.post<any>(config.postgresUrl+"/teams", {
    body: data
  });
 }

 deleteTeam(data):Observable<any>{
  return this.httpClient.delete<any>(config.postgresUrl+"/teams/"+data);
 }

}
