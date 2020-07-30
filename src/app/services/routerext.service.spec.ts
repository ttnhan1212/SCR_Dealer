import { TestBed } from '@angular/core/testing';

import { RouterextService } from './routerext.service';

describe('RouterextService', () => {
  let service: RouterextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
