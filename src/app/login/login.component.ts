import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    emailAddress: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLoginSubmit() {
    this.authService.login(this.loginData.emailAddress, this.loginData.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        console.log('JWT Token:', localStorage.getItem('token'));
        console.log('Before navigating to /create...');
        this.router.navigate(['/create']);
        console.log('After navigating to /create...');
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
