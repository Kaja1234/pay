import { TestBed } from '@angular/core/testing';

import { MoneyPeService } from './moneype.service';

describe('MoneyPeService', () => {
  let service: MoneyPeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoneyPeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
