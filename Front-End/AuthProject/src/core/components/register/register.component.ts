import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private notifier: NotifierService) {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { fullName, username, password } = this.registerForm.value;
      this.authService.register(fullName, username, password).subscribe({
        next: (response) => {
          this.notifier.notify('success', 'Registration successful!');
          // Handle success, e.g., navigate to login
        },
        error: (error) => {
          this.notifier.notify('error', error.error?.message || 'Registration failed');
        }
      });
    }
  }
}
