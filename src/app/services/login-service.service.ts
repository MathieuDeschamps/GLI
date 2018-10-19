import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private URL_BASE: String = 'http://localhost:8081/user/connect/';

  constructor(private http: HttpClient) { }

  connectUserWithClearPassword(password: string){

    let cryptedPassword  = btoa(password);
    return null;//this.http.get();
  }
}
