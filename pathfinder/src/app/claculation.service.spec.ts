import { TestBed } from '@angular/core/testing';

import { ClaculationService } from './claculation.service';

describe('ClaculationService', () => {
  let service: ClaculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
