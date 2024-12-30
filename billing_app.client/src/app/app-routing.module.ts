import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { RegistrationComponent } from './billing-identity/registration/registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'signup', component: RegistrationComponent },
  // { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
