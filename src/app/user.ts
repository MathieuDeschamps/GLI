import {Sport} from './sport';
import {Lieu} from './lieu';

export class User {

  id: number;
  pseudo: string;
  email: string;
  lieux: Lieu[];
  sports: Sport[];
}
