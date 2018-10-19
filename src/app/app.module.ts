import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LogInComponent} from './log-in/log-in.component';
import {HomePageComponent} from './home-page/home-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MzButtonModule, MzModalModule} from 'ngx-materialize';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


const appRoutes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'subscribe', component: AccountCreationComponent},
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: '**', component: LogInComponent} //@TODO remplacer ici par une page 404

];


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomePageComponent,
    AccountCreationComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MzButtonModule,
    MzModalModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
