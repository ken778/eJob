import { TestBed } from '@angular/core/testing';

import { JobFeedsService } from './job-feeds.service';

describe('JobFeedsService', () => {
  let service: JobFeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobFeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
