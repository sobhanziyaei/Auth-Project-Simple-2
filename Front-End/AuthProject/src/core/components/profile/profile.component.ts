import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user = {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2024'
  };

  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/home']);
  }
}
