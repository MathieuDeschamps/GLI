import {Component, OnInit} from '@angular/core';
import {Sport} from '../sport';
import {Router} from '@angular/router';
import {WeatherServiceService} from '../services/weather-service.service';
import { MzSelectModule } from 'ngx-materialize';
import {UserService} from '../services/user.service';
import {Lieu} from '../lieu';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  userFirstName: String = 'Roger';
  userLastName: String = 'Croisillion';
  sports: Sport[];
  selectedSportId: Number;
  selectedSport: Sport;
  lieuSport: Lieu[];
  selectedLieux: String;
  weatherList: Array<any>;



  constructor(private router: Router, private weather: WeatherServiceService, private userService: UserService) {
  }

  ngOnInit() {
    console.log('init');
    this.userService.getSport().subscribe( (data: Sport[]) => {
      this.sports = data;
    });
  }

  sportChange( event ) {
    this.lieuSport = this.sports.filter( sport => sport.id == $(event.target).val() )[0].lieus;
    this.selectedSport = this.sports.filter( sport => sport.id == $(event.target).val() )[0];
  }
  disconnect() {
    console.log('disconnect');
    localStorage.setItem('USER_ID', undefined);
    this.userService.setLogged(false, -1);
    this.router.navigate(['login']);

  }

  click(){
    this.weather.getWeatherByCityZip( this.selectedLieux).subscribe( (data) => {
      const result = data['list'];
       this.weatherList = result.filter( weather => {
        const date = new Date(weather['dt_txt']);
        return date.getHours() === 15;
      });
       console.log(this.weatherList);
    });
  }




}
