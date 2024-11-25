import { TestBed } from '@angular/core/testing';

import { AccHeadService } from './acc-head.service';

describe('AccHeadService', () => {
  let service: AccHeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccHeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
