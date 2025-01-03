import { Component, OnInit } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, NavMenuComponent, FooterComponent, HomeComponent],
  styleUrl: './app.component.css'
})
export class AppComponent  {
}