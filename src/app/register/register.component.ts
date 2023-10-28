import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  /**
   * Object containing user registration details.
   * @property {string} name - The full name of the user.
   * @property {string} emailAddress - The email address of the user.
   * @property {string} password - The password chosen by the user.
   */
  registerData = {
    name: '',
    emailAddress: '',
    password: '',
  };

  /**
   * Constructs the component and injects required services.
   * @param {AuthService} authService - Service for authentication related operations.
   * @param {ActivatedRoute} route - Represents the active route associated with the component that is loaded in an outlet.
   * @param {Router} router - Angular Router for navigation.
   */
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {} // injections

  /**
   * Handles the submission of the registration form.
   * Attempts to register the user with provided details and navigates to the '/login' route on successful registration.
   * Displays error information if the registration attempt fails.
   */
  onRegisterSubmit() {
    this.authService.register(this.registerData).subscribe(
      (response) => {
        console.log(response.data.id);
        this.authService.setUserId(response.data.id);
        this.router.navigate(['/login']); // matches with backend output
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
