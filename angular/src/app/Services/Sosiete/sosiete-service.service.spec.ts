import { TestBed } from '@angular/core/testing';

import { SosieteServiceService } from './sosiete-service.service';

describe('SosieteServiceService', () => {
  let service: SosieteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SosieteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
