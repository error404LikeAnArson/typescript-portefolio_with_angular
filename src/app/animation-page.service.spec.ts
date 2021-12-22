import { TestBed } from '@angular/core/testing';

import { AnimationPageService } from './animation-page.service';

describe('AnimationPageService', () => {
  let service: AnimationPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
