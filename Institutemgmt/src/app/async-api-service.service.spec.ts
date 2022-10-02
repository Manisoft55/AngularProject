import { TestBed } from '@angular/core/testing';

import { AsyncApiServiceService } from './async-api-service.service';

describe('AsyncApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsyncApiServiceService = TestBed.get(AsyncApiServiceService);
    expect(service).toBeTruthy();
  });
});
