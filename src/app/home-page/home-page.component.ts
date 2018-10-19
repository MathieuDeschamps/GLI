import {Component, OnInit} from '@angular/core';
import {Sport} from '../sport';
import {Router} from '@angular/router';
import {WeatherServiceService} from '../services/weather-service.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  userFirstName: String = 'Roger';
  userLastName: String = 'Croisillion';
  userSportList: Sport[] = [
    {id: 1, label: 'Tennis', sportType: 'SportExterieur', temperatureMax: 30, temperatureMin: 10},
    {id: 2, label: 'Basket', sportType: 'SportInterieur', temperatureMax: null  , temperatureMin: null},
    {id: 3, label: 'Course', sportType: 'SportExterieur', temperatureMax: 35, temperatureMin: 12}
  ];


  constructor(private router: Router, private weather: WeatherServiceService) {
  }

  ngOnInit() {
  }

  test() {
    this.weather.getWeatherByCityZip('35200').subscribe((data) => {
      console.log('data', data);
    });
  }

  disconnect(){
    console.log('disconnect');
    localStorage.setItem('USER_ID', undefined);
    this.router.navigate(['login']);

  }


}
