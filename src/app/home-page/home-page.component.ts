import {Component, OnInit} from '@angular/core';
import {Sport} from "../sport";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  userFirstName: String = 'Roger';
  userLastName: String = 'Croisillion';
  userSportList: Sport[] = [
    {id: 1, label: 'Tennis', sportType: 'SportExterieur', temperatureMax: 30},
    {id: 2, label: 'Basket', sportType: 'SportInterieur'},
    {id: 3, label: 'Course', sportType: 'SportExterieur', temperatureMax: 35, temperatureMin: 12}
  ];


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  disconnect(){
    console.log('disconnect');
    this.router.navigate(['login']);

  }


}
