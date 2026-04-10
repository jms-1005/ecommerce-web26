import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Social } from './social/social';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: Home},
  { path: 'contact', component: Contact},
  { path: 'social', component: Social}


];
