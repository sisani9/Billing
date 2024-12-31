import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BillingCoreComponent } from './billing-core/billing-core.component';
import { BillingIdentityComponent } from './billing-identity/billing-identity.component';
import { SigninComponent } from './billing-identity/signin/signin.component';
import { SignupComponent } from './billing-identity/signup/signup.component';
// import { RegistrationComponent } from './billing-identity/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavMenuComponent,
    BillingCoreComponent,
    BillingIdentityComponent,
    SigninComponent,
    SignupComponent,
    
  
    

  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
