import { TestBed } from '@angular/core/testing';

import { GruService } from './gru.service';

describe('GruService', () => {
  let service: GruService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
