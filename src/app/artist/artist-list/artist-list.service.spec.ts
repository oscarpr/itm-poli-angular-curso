import { TestBed, inject } from '@angular/core/testing';

import { ArtistsListService } from './artist-list.service';

describe('AlbumListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistsListService]
    });
  });

  it('should be created', inject([ArtistsListService], (service: ArtistsListService) => {
    expect(service).toBeTruthy();
  }));
});
