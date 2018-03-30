import { TestBed, inject } from '@angular/core/testing';

import { AutodeskService } from './autodesk.service';

describe('AutodeskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutodeskService]
    });
  });

  it('should be created', inject([AutodeskService], (service: AutodeskService) => {
    expect(service).toBeTruthy();
  }));
});
