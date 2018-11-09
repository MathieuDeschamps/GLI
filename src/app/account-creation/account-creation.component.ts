import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {User} from '../user';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  email: string;
  password: string;
  pseudo: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  register() {

    if ( this.password.trim() !== '' && this.pseudo.trim() !== '' && this.email.trim() !== '') {
      this.password = btoa(this.password);
      const user = new User(this.pseudo, this.email, this.password);
      const json = JSON.stringify(user);
      this.userService.createUser(json).subscribe( (data) => {
        console.log('userId', data['entity']);
        if ( data['entity'] > 0)
        {
          localStorage.setItem('USER_ID', data['entity']);
          this.router.navigate(['home']);
          this.userService.setLogged(true, data['entity']);
        }

      });
    }

  }
}
