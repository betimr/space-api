import { TestBed } from '@angular/core/testing';

import { SpaceApiService } from './space-api.service';

describe('SpaceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpaceApiService = TestBed.get(SpaceApiService);
    expect(service).toBeTruthy();
  });
});
