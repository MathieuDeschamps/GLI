import {Component, OnInit} from '@angular/core';
import {Sport} from "../sport";
import {PreferenceService} from "../services/preference.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {

  selectedSportId: Sport;
  sports: Sport[];
  selectedSport: Sport;

  constructor(private preferenceservice: PreferenceService, private userService: UserService) {
  }

  ngOnInit() {
    this.preferenceservice.getAllSport().subscribe((data: Sport[]) => {
      this.sports = data;
    });
  }

  sportChange(event) {
    this.selectedSport = this.sports.filter(sport => sport.id == $(event.target).val())[0];
    console.log(this.selectedSport);
  }

  addSportToUser() {
    this.preferenceservice.addSportToUser(this.userService.userId.valueOf(), this.selectedSport.id)
      .subscribe((data) => {
        console.log(data);
      }, (error) => {
        console.log('Probleme lors de l\'ajout d\'un sport: ' + error.message);
        console.log(error);
      });
  }
}
