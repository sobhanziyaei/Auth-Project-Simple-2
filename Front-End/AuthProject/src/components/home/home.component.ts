import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  userName = 'User';

  goToProfile() {
    console.log('Go to profile');
    // TODO: navigate to profile route
  }

  logout() {
    console.log('Logout');
    // TODO: add logout logic
  }
}
