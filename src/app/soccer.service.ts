// soccer.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlayerResponse } from './models/player-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoccerService {
  private baseUrl = 'http://localhost:9098';

  constructor(private http: HttpClient) {}

  searchPlayersByCriteria(criteria: string, query: string): Observable<PlayerResponse>  {
    return this.http.get<PlayerResponse>(
      `${this.baseUrl}/api/soccerplayers/${criteria}/${query}`
    );
  }

  addPlayerToTeam(teamId: number, playerId: number) {
    return this.http.put(
      `${this.baseUrl}/api/fantasyTeam/${teamId}/addPlayer/${playerId}`,
      {}
    );
  }

  removePlayerFromTeam(teamId: number, playerId: number) {
    return this.http.put(
      `${this.baseUrl}/api/fantasyTeam/${teamId}/removePlayer/${playerId}`,
      {}
    );
  }

  getUserTeams(userId: number) {
    return this.http.get(`${this.baseUrl}/api/fantasyTeam/${userId}`);
  }

  createFantasyTeam(team: any) {
    return this.http.post(`${this.baseUrl}/api/fantasyTeam`, team);
  }
}
