import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router for navigation
import { FantasyTeamService } from '../fantasy-team.service';
import { SoccerPlayer } from '../soccer-player.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  userFantasyTeamPlayers: SoccerPlayer[] = [];
  playerSearchTerm: string = '';
  searchResults: SoccerPlayer[] = [];
  hasFantasyTeam: boolean = false; 

  constructor(
    private router: Router,
    private fantasyTeamService: FantasyTeamService
  ) { }

  ngOnInit() {
=
    this.checkUserHasFantasyTeam();
  }

=
  checkUserHasFantasyTeam() {

    this.fantasyTeamService.getFantasyTeams(userId).subscribe((fantasyTeams) => {
      this.hasFantasyTeam = fantasyTeams.length > 0;
      if (!this.hasFantasyTeam) {

        this.router.navigate(['/create-fantasy-team']);
      }
    });
  }

}
