import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoccerService } from '../soccer.service';
import { AuthService } from '../auth.service';
import {
  PlayerResponse,
  TeamResponse,
} from '../models/player-response.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  searchQuery: string = '';
  searchType: string = 'name';
  players: any[] = [];
  myTeam: any[] = [];
  userId: number | null = null;
  teamId?: number;
  teamName: string = '';
  intendedPlayerId?: number | null;

  /**
   * Constructs the component and injects required services.
   * @param {SoccerService} soccerService - Service for soccer related operations.
   * @param {AuthService} authService - Service for authentication related operations.
   */
  constructor(
    private soccerService: SoccerService,
    private authService: AuthService // injecting auth service
  ) {}
  /**
   * Lifecycle hook that is called after data-bound properties are initialized.
   * It initializes the user ID and retrieves the user's team ID if available.
   */
  ngOnInit() {
    this.userId = this.authService.getUserId();
    if (this.userId !== null) {
      this.authService.getTeamId().subscribe((response) => {
        if (response && response.length > 0) {
          this.teamId = response[0].id;
        }
      });
    }
  }
  /**
   * Search for players based on given criteria.
   */

  searchPlayers() {
    this.soccerService
      .searchPlayersByCriteria(this.searchType, this.searchQuery)
      .subscribe((response: PlayerResponse) => {
        this.players = response.data;
      });
  }
  /**
   * Retrieve the ID of the user's team.
   * @returns {number | undefined} - The ID of the user's team, or undefined if not available.
   */
  getMyTeamId(): number | undefined {
    return this.teamId;
  }
  /**
   * Add a player to the user's team. If no team exists, prompts the user to create one.
   * @param {number} playerId - The ID of the player to add.
   */

  addPlayerToTeam(playerId: number) {
    if (!this.teamId) {
      this.intendedPlayerId = playerId; // Store the playerId to be added after creating team
      this.promptCreateTeam();
      return;
    }

    this.soccerService
      .addPlayerToTeam(this.teamId, playerId)
      .subscribe((response: TeamResponse) => {
        if (response.soccerPlayers && response.soccerPlayers.length > 0) {
          const addedPlayer =
            response.soccerPlayers[response.soccerPlayers.length - 1];

          // Check if player already exists in the myTeam array
          const playerExists = this.myTeam.some(
            (player) => player.id === addedPlayer.id
          );

          if (!playerExists) {
            this.myTeam.push(addedPlayer);
          }
        }
      });
  }
  /**
   * Prompt the user to create a new fantasy team.
   */
  promptCreateTeam() {
    const teamNameFromPrompt = prompt(
      'Please enter a name for your Fantasy Team:'
    );
    if (teamNameFromPrompt) {
      this.teamName = teamNameFromPrompt;
      const teamData = {
        name: this.teamName,
        user: {
          id: this.userId,
        },
      };
      this.soccerService
        .createFantasyTeam(teamData)
        .subscribe((response: any) => {
          this.teamId = response.id;
          alert('Your fantasy team has been created!');
          if (this.intendedPlayerId) {
            this.addPlayerToTeam(this.intendedPlayerId);
            this.intendedPlayerId = null; // Reset the intendedPlayerId
          }
        });
    }
  }
  /**
   * Remove a player from the user's team.
   * @param {number} playerId - The ID of the player to remove.
   */
  removePlayerFromTeam(playerId: number) {
    if (!this.teamId) {
      console.error('Team ID not available');
      return;
    }

    this.soccerService
      .removePlayerFromTeam(this.teamId, playerId)
      .subscribe((response) => {
        this.myTeam = this.myTeam.filter((player) => player.id !== playerId);
      });
  }
}
