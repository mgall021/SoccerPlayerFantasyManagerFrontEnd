import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    name: '',
    emailAddress: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onRegisterSubmit() {

    this.authService.register(this.registerData).subscribe(
      (response) => {
        window.location.href = '/login'; 
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
