import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

// @ts-ignore
describe('UserService', () => {
  // @ts-ignore
  beforeEach(() => TestBed.configureTestingModule({}));

  // @ts-ignore
  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    // @ts-ignore
    expect(service).toBeTruthy();
  });
});
