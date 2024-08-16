import { TestBed } from '@angular/core/testing';

import { SharedPreferenceService } from './shared-preference.service';

describe('SharedPreferenceService', () => {
  let service: SharedPreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedPreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
