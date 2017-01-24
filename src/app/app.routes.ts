import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home';
import { NoContentComponent } from './no-content';
import { GamesComponent } from './components/games';
import { LoginComponent } from './components/login';
import { RegistrationComponent } from './components/registration'

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'games',  component: GamesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: '**',    component: NoContentComponent },
];
