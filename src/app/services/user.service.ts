import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import { HttpHeaders } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_BASE = 'http://localhost:8081/user';
  private logged = new Subject<Boolean>();
  public  logged$ = this.logged.asObservable();
  constructor(private http: HttpClient) { }


  createUser( user: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(this.URL_BASE, user, httpOptions );
  }

  setLogged( logged: boolean) {
    this.logged.next(logged);
  }
}
