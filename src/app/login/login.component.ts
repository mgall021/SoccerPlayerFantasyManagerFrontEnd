import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  /**
   * Object containing user login details.
   * @property {string} emailAddress - The email address of the user.
   * @property {string} password - The password of the user.
   */
  loginData = {
    emailAddress: '',
    password: '',
  };

  /**
   * Constructs the component and injects required services.
   * @param {AuthService} authService - Service for authentication related operations.
   * @param {Router} router - Angular Router for navigation.
   */
  constructor(private authService: AuthService, private router: Router) {} // inject AuthService

  /**
   * Handles the submission of the login form.
   * Attempts to authenticate the user with provided credentials and navigates to the '/create' route on success.
   * Displays error information if the login attempt fails.
   */
  onLoginSubmit() {
    this.authService
      .login(this.loginData.emailAddress, this.loginData.password)
      .subscribe(
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
