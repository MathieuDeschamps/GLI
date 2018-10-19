import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedSub: Subscription = null;
  logged: boolean;
  constructor(private  router: Router, private  userService: UserService) { }

  ngOnInit() {
    this.loggedSub = this.userService.logged$.subscribe(( value ) => {
      this.logged = value.valueOf();
    });
  }
  disconnect() {
    localStorage.setItem('USER_ID', undefined);
    this.userService.setLogged(false);
    this.router.navigate(['login']);
  }

}
