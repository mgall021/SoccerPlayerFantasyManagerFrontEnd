import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoccerService } from '../soccer.service';
import { AuthService } from '../auth.service';

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

  constructor(
    private soccerService: SoccerService,
    private authService: AuthService  
  ) {}

  ngOnInit() {
    this.userId = this.authService.getUserId(); // Assuming this method exists in AuthService and returns the logged-in user's ID
    if (this.userId !== null) {
      // If you have other logic to execute for the logged-in user, place it here
    }
  }

  searchPlayers() {
    this.soccerService.searchPlayersByCriteria(this.searchType, this.searchQuery).subscribe(response => {
      this.players = response.data;
    });
  }

  getMyTeamId(): number {
    // Assuming the AuthService has a method called getTeamId that returns the fantasy team ID of the user
    return this.authService.getTeamId();
  }

  addPlayerToTeam(playerId: number) {
    const teamId = this.getMyTeamId();
    this.soccerService.addPlayerToTeam(teamId, playerId).subscribe(response => {
      this.myTeam.push(response);
    });
  }

  removePlayerFromTeam(playerId: number) {
    const teamId = this.getMyTeamId();
    this.soccerService.removePlayerFromTeam(teamId, playerId).subscribe(response => {
      // Logic to update `myTeam` array
    });
  }
}
