import { TestBed } from '@angular/core/testing';

import { AddunitService } from './addunit.service';

describe('AddunitService', () => {
  let service: AddunitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddunitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
