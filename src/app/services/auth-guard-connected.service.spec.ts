import { TestBed } from '@angular/core/testing';

import { AuthGuardConnectedService } from './auth-guard-connected.service';

describe('AuthGuardConnectedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardConnectedService = TestBed.get(AuthGuardConnectedService);
    expect(service).toBeTruthy();
  });
});
