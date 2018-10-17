import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.css']
})
export class AccountCreationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancelAccountCreation() {
    // @todo canceling ?
    console.log('Canceling Account creation');
    this.router.navigate(['login']);
  }

  createNewAccount() {
    // @todo account creation
    console.log('Account Creation');
  }
}
