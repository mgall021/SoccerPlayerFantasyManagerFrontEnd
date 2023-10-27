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
  // Declare this property

  constructor(
    private soccerService: SoccerService,
    private authService: AuthService
  ) {}

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

  searchPlayers() {
    this.soccerService
      .searchPlayersByCriteria(this.searchType, this.searchQuery)
      .subscribe((response: PlayerResponse) => {
        this.players = response.data;
      });
  }

  getMyTeamId(): number | undefined {
    return this.teamId;
  }

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
