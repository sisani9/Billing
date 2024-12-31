import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { RouterLinkActive } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  {
}