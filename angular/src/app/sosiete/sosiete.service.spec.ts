import { TestBed } from '@angular/core/testing';

import { SosieteService } from './sosiete.service';

describe('SosieteService', () => {
  let service: SosieteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SosieteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
