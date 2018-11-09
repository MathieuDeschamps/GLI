import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardConnectedService implements CanActivate {

  constructor(public userService: UserService, public router: Router) {
  }

  canActivate() {
    if (this.userService.isLogged()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
