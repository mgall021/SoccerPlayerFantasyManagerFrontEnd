import { TestBed } from '@angular/core/testing';

import { FantasyTeamService } from './fantasy-team.service';

describe('FantasyTeamService', () => {
  let service: FantasyTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FantasyTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
