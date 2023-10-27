import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; 
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private authService: AuthService,private route:ActivatedRoute, private router: Router) {}

  onRegisterSubmit() {
    this.authService.register(this.registerData).subscribe(
      (response) => {
        console.log(response.data.id);
        this.authService.setUserId(response.data.id);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  }
}
