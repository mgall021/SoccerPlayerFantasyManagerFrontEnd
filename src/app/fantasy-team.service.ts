import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FantasyTeamService {
  private baseUrl = 'http://localhost:9098/api/fantasyTeam';

  constructor(private http: HttpClient) {}

  getUserFantasyTeams(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  createFantasyTeam(fantasyTeam: any): Observable<any> {
    return this.http.post(this.baseUrl, fantasyTeam);
  }

  addPlayerToTeam(teamId: number, playerId: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/${teamId}/addPlayer/${playerId}`, {});
  }

  removePlayerFromTeam(teamId: number, playerId: number): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/${teamId}/removePlayer/${playerId}`,
      {}
    );
  }

  deleteFantasyTeam(teamId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${teamId}`);
  }
}
