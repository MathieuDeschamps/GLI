import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  private URL_BASE: String = 'http://localhost:8081/';

  constructor(private http: HttpClient) {
  }

  getAllSport() {
    return this.http.get(this.URL_BASE + 'sport/all');
  }

  addSportToUser(userId: number, sportId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.put(this.URL_BASE + 'user/' + userId + '/sport', sportId, httpOptions);
  }

  removeSportToUser(userId: number, sportId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.put(this.URL_BASE + 'user/' + userId + '/removeSport', sportId, httpOptions);
  }

}
