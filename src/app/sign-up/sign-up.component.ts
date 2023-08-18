import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
// import {  FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

// PASSWORD AND CONFIRM PASSWORD 
// function passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
//   const password = control.get('pPassword');
//   const confirmPassword = control.get('pConfirmPassword');

//   if (password && confirmPassword && password.value !== confirmPassword.value) {
//     return { 'passwordMismatch': true };
//   }

//   return null;
// }

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {



  constructor( private http: HttpClient ) { }

  onUsersCreate(userDetails: { pName: string, pEmail: string, pPassword: string }) {
    const userData = {
      company_name: userDetails.pName,
      email: userDetails.pEmail,
      password: userDetails.pPassword
    };

    console.log(userDetails);
    this.http.post('https://reviewnest.onrender.com/api/v1/user/register', userData)
      .subscribe(
        (response) => {
          console.log('User registration successful:', response);
        },
        (error) => {
          console.error('Error while registering user:', error);
        }
      );
  }
}
