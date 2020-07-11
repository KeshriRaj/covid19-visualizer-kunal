import { TestBed } from '@angular/core/testing';

import { PostvalueService } from './postvalue.service';

describe('PostvalueService', () => {
  let service: PostvalueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostvalueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
