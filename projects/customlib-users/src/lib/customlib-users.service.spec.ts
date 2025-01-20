import { TestBed } from '@angular/core/testing';

import { CustomlibUsersService } from './customlib-users.service';

describe('CustomlibUsersService', () => {
  let service: CustomlibUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomlibUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
