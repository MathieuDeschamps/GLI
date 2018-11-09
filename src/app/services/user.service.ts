import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_BASE = 'http://localhost:8081/user';
  private isUserLogged = false;
  private logged = new Subject<Boolean>();
  public logged$ = this.logged.asObservable();
  public userId: Number = 23;

  constructor(private http: HttpClient) {
  }


  createUser(user: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(this.URL_BASE, user, httpOptions);
  }

  getSport() {
    console.log('getsports', this.userId);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.get(this.URL_BASE + '/' + this.userId + '/sports');
  }

  setLogged(logged: boolean, id: number) {
    this.logged.next(logged);
    if (logged) {
      this.userId = id;
    } else {
      this.userId = -1;
    }
    this.isUserLogged = logged;
  }

  isLogged() {
    return this.isUserLogged;
  }
}
