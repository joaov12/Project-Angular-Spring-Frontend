import { TestBed } from '@angular/core/testing';

import { ClientecService } from './clientec.service';

describe('ClientecService', () => {
  let service: ClientecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
