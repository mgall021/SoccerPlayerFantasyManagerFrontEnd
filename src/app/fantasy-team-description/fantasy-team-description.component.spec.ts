import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasyTeamDescriptionComponent } from './fantasy-team-description.component';

describe('FantasyTeamDescriptionComponent', () => {
  let component: FantasyTeamDescriptionComponent;
  let fixture: ComponentFixture<FantasyTeamDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasyTeamDescriptionComponent]
    });
    fixture = TestBed.createComponent(FantasyTeamDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
