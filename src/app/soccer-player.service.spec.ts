import { TestBed } from '@angular/core/testing';

import { SoccerPlayerService } from './soccer-player.service';

describe('SoccerPlayerService', () => {
  let service: SoccerPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoccerPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
