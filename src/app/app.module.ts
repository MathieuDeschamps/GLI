import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LogInComponent} from './log-in/log-in.component';

import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';

const appRoutes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'home', component: HomePageComponent},
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
    HomePageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
