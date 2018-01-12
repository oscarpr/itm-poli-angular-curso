import { TestBed, inject } from '@angular/core/testing';

import { ArtistAlbumsService } from './artist-albums.service';

describe('ArtistAlbumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistAlbumsService]
    });
  });

  it('should be created', inject([ArtistAlbumsService], (service: ArtistAlbumsService) => {
    expect(service).toBeTruthy();
  }));
});
