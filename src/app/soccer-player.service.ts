import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SoccerPlayerService {
  private baseUrl = '/api/soccerplayers'; 

  constructor(private http: HttpClient) {}

 
  getAllSoccerPlayers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }


  getSoccerPlayersByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/name/${name}`);
  }


  getSoccerPlayerById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  
  getSoccerPlayersByCountry(country: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/country/${country}`);
  }

  getSoccerPlayersByPosition(position: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/position/${position}`);
  }

  getSoccerPlayersByTeam(team: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/team/${team}`);
  }
}
