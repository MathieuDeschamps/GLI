import {Sport} from './sport';
import {Lieu} from './lieu';

export class User {

  id: number;
  pseudo: string;
  email: string;
  lieux: Lieu[];
  sports: Sport[];
  password: string;

  constructor( pseudo: string, email: string, password: string ) {
    this.pseudo = pseudo;
    this.email = email;
    this.password = password;
    this.lieux = [];
    this.sports = [];

  }
}
