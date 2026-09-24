import { TestBed } from '@angular/core/testing';
import { HoennLeadersService } from './hoenn-leaders-service';

describe('HoennLeadersService', () => {
  let service: HoennLeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennLeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
