import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private URL_BASE: string = 'http://localhost:8081/user/connect/';

  constructor(private http: HttpClient) {
  }

  connectUserWithClearPassword(password: string, pseudo: string) {
    return this.http.get(this.URL_BASE + btoa(password) + '/' + pseudo);
  }

  connectUser(password: string, pseudo: string) {
    const user: User = new User(pseudo, null, btoa(password));
    return this.http.post(this.URL_BASE, user);
  }
}
