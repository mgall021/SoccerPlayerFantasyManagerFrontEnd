import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: any = {};
  constructor(private httpClient: HttpClient) {}


  onRegisterSubmit() {
    name: this.registerForm.name, 
    emailAddress: this.registerForm.emailAddress, 
    password: this.registerForm.password,
  };

  this.httpClient.post('/auth/users/register/', registrationData)
  .subscribe(
    (response: any) => {
      // Registration successful, handle the response
      console.log(response); // You can log the response for debugging
      // Handle the success response (e.g., show a success message to the user)
    },
    (error: any) => {
      // Registration failed, handle the error
      console.error(error); // Log the error for debugging
      // Handle the error (e.g., display an error message to the user)
    }
  );
}
