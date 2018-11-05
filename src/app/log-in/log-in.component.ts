import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LoginServiceService} from '../services/login-service.service';
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
    this.login.connectUser(this.userPassword, this.userLogin).subscribe((data) => {
      if (typeof data === 'number') {
        if (data === -1) {
          console.log('ERREUR');
        } else {
          console.log('Connecting');
          this.userService.setLogged(true, data);
          localStorage.setItem('USER_ID', data.toString());
          this.router.navigate(['/home']);
        }
      }
    });
  }


  goToNewAccountCreation() {
    console.log('going to account creation page');
    this.router.navigate(['/subscribe']);
  }
}
