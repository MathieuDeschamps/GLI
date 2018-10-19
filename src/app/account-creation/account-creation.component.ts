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

    this.password = btoa(this.password);
    const user = new User(this.pseudo, this.email, this.password);
    console.log("coucou");
    const json = JSON.stringify(user);
    this.userService.createUser(json).subscribe( (data) => {
      console.log(data['entity']);
        
    });
  }
}
