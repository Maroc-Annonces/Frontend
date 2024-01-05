import { TestBed } from '@angular/core/testing';

import { PostuleurService } from './postuleur.service';

describe('PostuleurService', () => {
  let service: PostuleurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostuleurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
