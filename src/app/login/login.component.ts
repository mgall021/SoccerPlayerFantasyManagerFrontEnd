import { Component } from '@angular/core';
import { AuthService } from '../auth.service';// Import your AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    emailAddress: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  onLoginSubmit() {
    this.authService.login(this.loginData.emailAddress, this.loginData.password).subscribe(
      (response) => {
        // Login successful
        // Store the JWT token in local storage
        console.log(response);
        // this.authService.setUserId(response.data.id)
        localStorage.setItem('token', response.jwt);

        // Redirect to the "/create" page using Angular router
        this.router.navigate(['/create']);
      },
      (error) => {
        // Handle login error here (e.g., display an error message)
        console.error('Login failed:', error);
      }
    );
  }
}
