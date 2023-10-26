import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { FantasyTeamDescriptionComponent } from './fantasy-team-description/fantasy-team-description.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports:[CarouselComponent,NgbCarouselModule,FantasyTeamDescriptionComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {}
