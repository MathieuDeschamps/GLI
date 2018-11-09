import {Component, OnInit} from '@angular/core';
import {Sport} from '../sport';
import {PreferenceService} from '../services/preference.service';
import {UserService} from '../services/user.service';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  selectedSportId: Sport;
  sports: Sport[];
  selectedSport: Sport;

  userSports = new Subject<Sport[]>();
  public userSports$ = this.userSports.asObservable();
  loggedUserSports: Subscription = null;

  showUserSports: Sport[];


  constructor(private preferenceservice: PreferenceService, private userService: UserService) {
  }

  ngOnInit() {

    this.loggedUserSports = this.userSports$.subscribe((value) => {
      this.showUserSports = value;
    });

    this.preferenceservice.getAllSport().subscribe((data: Sport[]) => {
      this.sports = data;
    });

    this.userService.getSport().subscribe((data: Sport[]) => {
      this.userSports.next(data);
    });
  }

  sportChange(event) {
    this.selectedSport = this.sports.filter(sport => sport.id == $(event.target).val())[0];
  }

  addSportToUser() {
    this.preferenceservice.addSportToUser(this.userService.userId.valueOf(), this.selectedSport.id)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log('Probleme lors de l\'ajout d\'un sport: ' + error.message);
      });
  }

  deleteSportToUser(sportId: number) {
    this.preferenceservice.removeSportToUser(this.userService.userId.valueOf(), sportId)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log('Probleme lors de la suppression d\'un sport: ' + error.message);
      });

    //@TODO modifier ici le userSports
    // let tmp: Sport[] = this.showUserSports.filter(x -> sportId == x.id);
    // this.userSports.next(tmp);
  }
}
