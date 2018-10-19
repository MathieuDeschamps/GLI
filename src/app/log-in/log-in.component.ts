import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {LoginServiceService} from "../services/login-service.service";
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router, private http: HttpClientModule, private login: LoginServiceService, private userService: UserService) {
  }

  userPassword: string;
  userLogin: string;

  ngOnInit() {
  }

  onConnect() {
    this.login.connectUserWithClearPassword(this.userPassword, this.userLogin).subscribe((data) => {
      console.log(data);
      if (data) {
        console.log('Connecting');
        this.userService.setLogged(true);
        this.router.navigate(['/home']);
      } else {
        console.log('ERREUR');
      }
    });
  }

  goToNewAccountCreation() {
    console.log('going to account creation page');
    this.router.navigate(['/subscribe']);
  }
}
