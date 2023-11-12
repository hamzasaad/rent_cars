import { TestBed } from '@angular/core/testing';

import { ComentaireService } from './comentaire.service';

describe('ComentaireService', () => {
  let service: ComentaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
