import { Component, OnInit } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, RouterLink, AppComponent, NavMenuComponent, RouterLinkActive, FooterComponent, HomeComponent],
  styleUrl: './app.component.css'
})
export class AppComponent  {
}