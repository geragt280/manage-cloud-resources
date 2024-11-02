import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { UserComponent } from './components/user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title:"App Home Page" },
  { path: 'user', component: UserComponent, title: "User Page" },
];
