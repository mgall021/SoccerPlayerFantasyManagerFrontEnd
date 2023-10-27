import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoccerService } from '../soccer.service';
import { AuthService } from '../auth.service';
import { PlayerResponse } from '../models/player-response.interface';

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

  constructor(
    private soccerService: SoccerService,
    private authService: AuthService
  ) {
    this.teamId;
  }

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
        console.log(response);
        this.players = response.data;
      });
  }

  getMyTeamId(): number | undefined {
    return this.teamId;
  }

  addPlayerToTeam(playerId: number) {
    if (!this.teamId) {
      this.promptCreateTeam();
      return;
    }

    this.soccerService
      .addPlayerToTeam(this.teamId, playerId)
      .subscribe((response) => {
        this.myTeam.push(response);
      });
  }
  promptCreateTeam() {
    const teamNameFromPrompt = prompt(
      'Please enter a name for your Fantasy Team:'
    );
    if (teamNameFromPrompt) {
      this.teamName = teamNameFromPrompt; // Set the component's teamName property

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
        });
    }
  }

  removePlayerFromTeam(playerId: number) {
    if (!this.teamId) {
      // Check if teamId is undefined or null
      console.error('Team ID not available');
      return; // Exit from the method
    }

    this.soccerService
      .removePlayerFromTeam(this.teamId, playerId)
      .subscribe((response) => {
        // Logic to update `myTeam` array. For instance:
        this.myTeam = this.myTeam.filter((player) => player.id !== playerId);
      });
  }
}
