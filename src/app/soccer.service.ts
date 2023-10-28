// soccer.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  PlayerResponse,
  TeamResponse,
} from './models/player-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoccerService {
  private baseUrl = 'http://localhost:9098';

  constructor(private http: HttpClient) {}

  /**
   * Searches for soccer players based on a specified criteria and query.
   *
   * @param {string} criteria - The criteria to search by (e.g., 'name').
   * @param {string} query - The search query.
   * @returns {Observable<PlayerResponse>} - An observable with the response containing matched players.
   */
  searchPlayersByCriteria(
    criteria: string,
    query: string
  ): Observable<PlayerResponse> {
    return this.http.get<PlayerResponse>(
      `${this.baseUrl}/api/soccerplayers/${criteria}/${query}`
    );
  }

  /**
   * Adds a soccer player to a specific fantasy team.
   *
   * @param {number} teamId - The ID of the fantasy team.
   * @param {number} playerId - The ID of the soccer player to add.
   * @returns {Observable<TeamResponse>} - An observable with the response of the operation.
   */

  addPlayerToTeam(teamId: number, playerId: number): Observable<TeamResponse> {
    return this.http.put<TeamResponse>(
      `${this.baseUrl}/api/fantasyTeam/${teamId}/addPlayer/${playerId}`,
      {}
    );
  }

  /**
   * Removes a soccer player from a specific fantasy team.
   *
   * @param {number} teamId - The ID of the fantasy team.
   * @param {number} playerId - The ID of the soccer player to remove.
   * @returns {Observable<any>} - An observable with the response of the operation.
   */
  removePlayerFromTeam(teamId: number, playerId: number) {
    return this.http.put(
      `${this.baseUrl}/api/fantasyTeam/${teamId}/removePlayer/${playerId}`,
      {}
    );
  }

  /**
   * Retrieves all fantasy teams associated with a user.
   *
   * @param {number} userId - The ID of the user.
   * @returns {Observable<any>} - An observable with the response containing the user's teams.
   */
  getUserTeams(userId: number) {
    return this.http.get(`${this.baseUrl}/api/fantasyTeam/${userId}`);
  }

  /**
   * Creates a new fantasy team.
   *
   * @param {any} team - The details of the team to create.
   * @returns {Observable<any>} - An observable with the response of the operation.
   */
  createFantasyTeam(team: any) {
    return this.http.post(`${this.baseUrl}/api/fantasyTeam`, team);
  }
}
