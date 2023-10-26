import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-fantasy-team-description',
  standalone: true,
  imports: [NgFor],
  templateUrl: './fantasy-team-description.component.html',
  styleUrls: ['./fantasy-team-description.component.css'],
})
export class FantasyTeamDescriptionComponent {
  topics = [
    {
      title: 'Weather Api Project',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.',
    },
    {
      title: 'A Collaborative Project',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.',
    },
    {
      title: 'Agile Based Project Done In Sprints',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.',
    },
  ];
}
