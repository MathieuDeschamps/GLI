import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onConnect() {
    // @TODO tout en vrai, mais surtout : authentification
    console.log('Connecting');
    this.router.navigate(['/home']);

  }

  goToNewAccountCreation() {
    console.log('going to account creation page');
    this.router.navigate(['/subscribe']);
  }
}
