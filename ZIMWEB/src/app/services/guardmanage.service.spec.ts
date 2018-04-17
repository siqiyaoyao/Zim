import { TestBed, inject } from '@angular/core/testing';

import { GuardmanageService } from './guardmanage.service';

describe('GuardmanageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardmanageService]
    });
  });

  it('should be created', inject([GuardmanageService], (service: GuardmanageService) => {
    expect(service).toBeTruthy();
  }));
});
