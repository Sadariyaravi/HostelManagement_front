import { TestBed } from '@angular/core/testing';

import { HostelInterceptor } from './hostel.interceptor';

describe('HostelInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HostelInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HostelInterceptor = TestBed.inject(HostelInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
