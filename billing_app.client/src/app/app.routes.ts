import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLink,  } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './billing-identity/signup/signup.component';
import { SigninComponent } from './billing-identity/signin/signin.component';


export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'app-signup', component: SignupComponent },
  { path: 'app-signin', component: SigninComponent },
  

];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutes { }

