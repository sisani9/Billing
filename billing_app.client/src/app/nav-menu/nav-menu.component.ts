import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  standalone: false,
  
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  isExpanded = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  isLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    return false; // Replace with actual logic
  }

  logout() {
    // Implement your logout logic here
    console.log('User logged out');
  }
}
