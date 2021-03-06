import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
  import {AppComponent} from './app.component';
import {LogInComponent} from './log-in/log-in.component';
import {HomePageComponent} from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MzButtonModule, MzModalModule, MzSelectModule, MzIconModule, MzIconMdiModule, MzInputModule } from 'ngx-materialize';
import { AccountCreationComponent } from './account-creation/account-creation.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { StorageServiceModule} from 'angular-webstorage-service';
import { NavComponent } from './nav/nav.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AuthGuardConnectedService as AuthGuardConnected } from './services/auth-guard-connected.service';


const appRoutes: Routes = [
  {path: 'login', component: LogInComponent, canActivate: [AuthGuardConnected]},
  {path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  {path: 'subscribe', component: AccountCreationComponent, canActivate: [AuthGuardConnected]},
  {path: 'preference', component: PreferencesComponent, canActivate: [AuthGuard]},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: '**', component: LogInComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomePageComponent,
    AccountCreationComponent,
    NavComponent,
    PreferencesComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MzButtonModule,
    MzModalModule,
    MzIconMdiModule,
    MzIconModule,
    BrowserAnimationsModule,
    MzSelectModule,
    MzInputModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
