import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FantasyTeamService } from '../fantasy-team.service';
import { SoccerPlayerService } from '../soccer-player.service';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  userFantasyTeamPlayers: any[] = [];
  playerSearchTerm: string = '';
  searchResults: any[] = [];
  hasFantasyTeam: boolean = false;
  userId:number|null=null;

  constructor(
    private router: Router,
    private fantasyTeamService: FantasyTeamService, 
    private authService: AuthService
  ) {}

  ngOnInit() {
   
    this.userId=this.authService.getUserId();
    console.log(this.userId);
    this.checkUserHasFantasyTeam();
  }

  checkUserHasFantasyTeam() {
    this.fantasyTeamService
      .getUserFantasyTeams(this.userId as number)
      .subscribe((fantasyTeams) => {
        this.hasFantasyTeam = fantasyTeams.length > 0;
        if (!this.hasFantasyTeam) {
          this.router.navigate(['/create-fantasy-team']);
        }
      });
  }
  loadUserFantasyTeamPlayers() {
    this.fantasyTeamService
      .getUserFantasyTeams(this.userId as number)
      .subscribe((fantasyTeams) => {
        if (fantasyTeams.length > 0) {
          this.userFantasyTeamPlayers = fantasyTeams[0].soccerPlayers; // list of players
        }
      });
  }
  // searchPlayers() {
  //   this.fantasyTeamService
  //     .searchPlayers(this.playerSearchTerm)
  //     .subscribe((results) => {
  //       this.searchResults = results;
  //     });
  // }
  addPlayer(playerId: number) {
    this.fantasyTeamService.addPlayerToTeam(this.userId as number, playerId).subscribe(() => {
      this.loadUserFantasyTeamPlayers();
      this.searchResults = [];
    });
  }
  removePlayer(playerId: number) {
    this.fantasyTeamService
      .removePlayerFromTeam(this.userId as number, playerId)
      .subscribe(() => {
        this.loadUserFantasyTeamPlayers();
      });
  }
}
