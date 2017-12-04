import { TestBed, inject } from '@angular/core/testing';

import { FullResService } from './full-res.service';

describe('FullResService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullResService]
    });
  });

  it('should be created', inject([FullResService], (service: FullResService) => {
    expect(service).toBeTruthy();
  }));
});
