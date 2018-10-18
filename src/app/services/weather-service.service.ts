import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private URL_BASE: String = 'http://api.openweathermap.org/data/2.5/forecast?units=metric&mode=json';
  private API_KEY: String = '&APPID=6e04a81739a94bfeef9691ae59c1f3a6';

  constructor(private http: HttpClient) { }

  public getWeatherByCityZip( name: String )
  {
    console.log('test', this.URL_BASE + '&q=' +  name + ',fr' + this.API_KEY);
    return this.http.get( this.URL_BASE + '&zip=' +  name + ',fr' + this.API_KEY);
  }
}
