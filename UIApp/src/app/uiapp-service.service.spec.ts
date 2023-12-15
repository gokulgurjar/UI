import { TestBed } from '@angular/core/testing';

import { UIAppServiceService } from './uiapp-service.service';

describe('UIAppServiceService', () => {
  let service: UIAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
